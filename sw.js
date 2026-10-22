// Offline support: cache the app shell so documents open without a network.
// Document contents themselves live in IndexedDB (y-indexeddb).
const CACHE = 'gdoc-shell-v3'
const FILES_CACHE = 'gdoc-files' // images/attachments (written by the page too, for offline inserts)
const NAV_TIMEOUT_MS = 2500 // slow network: show the cached app instead of waiting
// where the app lives: "/" on its own server, "/<repo>/" on GitHub Pages
const SCOPE = new URL(self.registration.scope).pathname

async function cacheShell() {
  const cache = await caches.open(CACHE)
  const res = await fetch(SCOPE, { cache: 'no-cache' })
  if (!res.ok) return
  const html = await res.clone().text()
  await cache.put(SCOPE, res)
  const assets = [...html.matchAll(/(?:src|href)="(\/[^"]+)"/g)].map((m) => m[1])
  // the editor and history panel are separate chunks loaded on demand; cache them too
  // (and the files they use, like the PDF export's fonts)
  try {
    const manifest = await (await fetch(SCOPE + 'asset-manifest.json', { cache: 'no-cache' })).json()
    for (const c of Object.values(manifest)) assets.push(SCOPE + c.file, ...[...(c.css || []), ...(c.assets || [])].map((f) => SCOPE + f))
  } catch { /* dev server: no manifest */ }
  // hashed filenames never change, so only fetch what isn't cached yet
  const missing = []
  for (const a of new Set(assets)) if (!(await cache.match(a))) missing.push(a)
  await cache.addAll(missing)
}

self.addEventListener('install', (e) => {
  e.waitUntil(cacheShell().then(() => self.skipWaiting()))
})

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('gdoc-shell-') && k !== CACHE) await caches.delete(k)
    await self.clients.claim()
  })())
})

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url)
  if (e.request.method !== 'GET' || url.origin !== location.origin) return
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/ws/')) return

  // uploaded files are content-addressed (never change): cache first. Files
  // added on this device are already in the cache, even before they're uploaded.
  if (url.pathname.startsWith('/files/')) {
    e.respondWith((async () => {
      const cache = await caches.open(FILES_CACHE)
      const key = url.origin + url.pathname // ignore ?retry=
      const hit = await cache.match(key)
      if (hit) return hit
      const res = await fetch(e.request)
      // keep images for offline reading; attachments only when downloaded on purpose
      if (res.ok && (res.headers.get('content-type') || '').startsWith('image/')) cache.put(key, res.clone()).catch(() => {})
      return res
    })())
    return
  }

  if (e.request.mode === 'navigate') {
    // network first, so new deploys show up; fall back to the cached shell when
    // offline or when the network is too slow to answer quickly
    e.respondWith((async () => {
      try {
        const net = fetch(e.request)
        const cached = await caches.match(SCOPE)
        const res = cached
          ? await Promise.race([net, new Promise((resolve) => setTimeout(() => resolve(cached), NAV_TIMEOUT_MS))])
          : await net
        if (res === cached) {
          net.then((r) => r.ok && caches.open(CACHE).then((c) => c.put(SCOPE, r))).catch(() => {})
          return res
        }
        if (res.ok) {
          const cache = await caches.open(CACHE)
          cache.put(SCOPE, res.clone())
          cacheShell().catch(() => {})
        }
        return res
      } catch {
        return (await caches.match(SCOPE)) || new Response('Offline', { status: 503 })
      }
    })())
    return
  }

  // static assets: cache first (hashed filenames), then network
  e.respondWith((async () => {
    const hit = await caches.match(e.request)
    if (hit) return hit
    const res = await fetch(e.request)
    if (res.ok) (await caches.open(CACHE)).put(e.request, res.clone())
    return res
  })())
})
