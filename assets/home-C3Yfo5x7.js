const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/github-BeSTMvGK.js","assets/ops-DHl3zy3h.js","assets/y-indexeddb-DEllokZD.js","assets/ghsettings-6DsdPQFF.js","assets/index-EXn6hwa4.js","assets/index-rGTsVuex.css","assets/native-BAoouC9d.js"])))=>i.map(i=>d[i]);
import{b as e,c as t,d as n,i as r,o as i,r as a,s as o,t as s,x as c}from"./index-EXn6hwa4.js";import{_ as l,a as u,c as d,d as f,g as p,h as m,i as h,l as g,m as _,o as v,r as y,t as b,u as x,x as S,y as C}from"./ghsettings-6DsdPQFF.js";var w=`<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>`;async function T(d){document.title=`Docs`,d.innerHTML=`
    <header class="home-top">
      <a class="brand" href="${r()}">${i}<span>Docs</span></a>
      <input class="search" type="search" placeholder="Search" aria-label="Search documents" />
      <span class="net-badge" hidden>Offline</span>
      <button class="gh-btn" title="Store documents in your GitHub repository">${w}<span class="gh-label">Connect GitHub</span></button>
    </header>
    <section class="templates">
      <div class="templates-inner">
        <div class="section-label">Start a new document</div>
        <div class="template-row">
          <button class="template" data-new="blank"><div class="thumb blank"><span>+</span></div><div>Blank document</div></button>
          <button class="template" data-import><div class="thumb import"><svg viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg></div><div>Import file (.md, .agentdoc)</div></button>
          <button class="template" data-new="outline"><div class="thumb outline"><div class="l t"></div><div class="l"></div><div class="l s"></div><div class="l"></div><div class="l"></div></div><div>Project outline</div></button>
        </div>
      </div>
    </section>
    <section class="doc-list gh-list" hidden>
      <div class="list-head"><span class="gh-head"></span><span></span><span></span></div>
      <div class="gh-rows"></div>
    </section>
    <section class="doc-list server-list">
      <div class="list-head"><span class="server-head">Recent documents</span><span>Last modified</span><span></span></div>
      <div class="rows"></div>
    </section>`,d.append(n(`<footer class="disclaimer">Docs is an independent open-source project, built as a learning exercise. It is not affiliated with, endorsed by, or associated with Google or Google Docs, or with GitHub. Your documents are stored only in this browser and in the repository you connect; this site collects no data.</footer>`));let p=d.querySelector(`.rows`),h=d.querySelector(`.search`);d.querySelector(`.net-badge`);let y=[],x=()=>{let s=h.value.trim().toLowerCase(),l=y.filter(e=>!s||(e.title||``).toLowerCase().includes(s));p.innerHTML=l.length?``:`<div class="empty">${s?`No matching documents.`:`No documents yet. Start one above.`}</div>`;for(let s of l){let l=n(`
        <a class="row" href="${r(`d/`+o(s.id))}">
          ${i}
          <span class="name">${o(s.title||`Untitled document`)}${s.localOnly?` <span class="pill">on this device</span>`:``}</span>
          <span class="when">${s.updatedAt?e(s.updatedAt):``}</span>
          <button class="icon-btn del" title="Delete" aria-label="Delete document"><svg viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5zm2 15H7V6h10v13zM9 8h2v9H9zm4 0h2v9h-2z"/></svg></button>
        </a>`);l.querySelector(`.del`).addEventListener(`click`,async e=>{if(e.preventDefault(),confirm(`Delete "${s.title||`Untitled document`}" for everyone?`))try{s.localOnly||await a(`/docs/${s.id}`,{method:`DELETE`}),t(s.id),indexedDB.deleteDatabase(s.id),y=y.filter(e=>e.id!==s.id),x()}catch(e){c(`Could not delete: `+e.message)}}),p.append(l)}},S=g(),C=d.querySelector(`.gh-btn`);C.addEventListener(`click`,()=>E());let T=[],D=!1,O=d.querySelector(`.gh-rows`),k=()=>{let e=h.value.trim().toLowerCase(),t=m(),a=T.filter(t=>!e||t.title.toLowerCase().includes(e)||t.slug.includes(e));for(let n of Object.keys(t))!T.some(e=>e.slug===n)&&(!e||n.includes(e))&&a.push({slug:n,title:n,unsavedNew:!0});O.innerHTML=a.length?``:`<div class="empty">${e?`No matching documents.`:`No documents in the repository yet. Start one above.`}</div>`;for(let e of a){let a=n(`
        <a class="row" href="${r(`gh/`+o(e.slug))}">
          ${i}
          <span class="name">${o(e.title)} <span class="pill mono">docs/${o(e.slug)}.md</span>${t[e.slug]?` <span class="pill pending" title="Edits made on this device that aren't in the repository yet">${D?`Saving…`:`Not saved yet`}</span>`:``}</span>
          <span class="when"></span>
          <button class="icon-btn del" title="Delete from the repository" aria-label="Delete document"><svg viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5zm2 15H7V6h10v13zM9 8h2v9H9zm4 0h2v9h-2z"/></svg></button>
        </a>`);a.querySelector(`.del`).addEventListener(`click`,async t=>{if(t.preventDefault(),confirm(`Delete "${e.title}" from ${S.repo}? It stays in the repository's git history.`))try{await u(e.slug),T=T.filter(t=>t.slug!==e.slug),k()}catch(e){c(`Could not delete: `+e.message)}}),O.append(a)}};if(S){C.querySelector(`.gh-label`).textContent=S.repo,C.classList.add(`on`),d.querySelector(`.gh-list`).hidden=!1,d.querySelector(`.gh-head`).innerHTML=`${w} In GitHub · ${o(S.repo)}`,d.querySelector(`.server-head`).textContent=`On this server`,T=b(),k();let e=()=>f().then(e=>{T=e,k()}).catch(e=>{T.length||(O.innerHTML=`<div class="empty">Could not reach GitHub: ${o(e.message)}</div>`)}),t=async()=>{if(!D&&Object.keys(m()).length&&v()&&navigator.onLine){D=!0,k();try{let{flushPendingDocs:e}=await s(async()=>{let{flushPendingDocs:e}=await import(`./github-BeSTMvGK.js`);return{flushPendingDocs:e}},__vite__mapDeps([0,1,2,3,4,5]));await e()}catch(e){console.warn(e)}finally{D=!1}await e(),k()}};e().then(t).then(()=>l()),window.addEventListener(`online`,t),h.addEventListener(`input`,k)}d.querySelector(`.server-list`).hidden=!0,S||(d.querySelector(`.server-list`).after(n(`<section class="welcome">
        <h2>${w} Keep your documents in your own GitHub repository</h2>
        <p>Docs saves each document to a repository you choose, as readable markdown with its images, committed as you type. Nothing is stored anywhere else: this page is just the editor. Agents and people can edit the same files with git; the app merges their changes.</p>
        <button class="primary connect">Connect GitHub</button>
      </section>`)),d.querySelector(`.welcome .connect`).addEventListener(`click`,()=>E())),h.addEventListener(`input`,x),d.querySelector(`[data-import]`).addEventListener(`click`,()=>{if(!S){E();return}let e=n(`<input type="file" accept=".md,.markdown,.txt,.agentdoc,text/markdown,text/plain" hidden>`);e.addEventListener(`change`,async()=>{let t=e.files[0];if(!t)return;let n=new Uint8Array(await t.arrayBuffer());if(n[0]===31&&n[1]===139)try{let{decodeNative:e,NATIVE_TYPE:t}=await s(async()=>{let{decodeNative:e,NATIVE_TYPE:t}=await import(`./native-BAoouC9d.js`);return{decodeNative:e,NATIVE_TYPE:t}},__vite__mapDeps([6,1]));if(S){let{title:t}=await e(n),i=await _(`native`,t);await(await caches.open(`gdoc-imports`)).put(`/import/`+i,new Response(n)),location.href=r(`gh/`+i);return}let i=await a(`/docs/import`,{method:`POST`,headers:{"content-type":t},body:n});location.href=r(`d/`+i.id)}catch(e){c(navigator.onLine?`Import failed: `+e.message:`Importing a file needs a connection`)}else if(S){let e=await _(`import`);sessionStorage.setItem(`gdoc:import:`+e,new TextDecoder().decode(n)),location.href=r(`gh/`+e)}else try{let e=await a(`/docs/import`,{method:`POST`,headers:{"content-type":`text/markdown`},body:new TextDecoder().decode(n)});location.href=r(`d/`+e.id)}catch(e){c(navigator.onLine?`Import failed: `+e.message:`Importing a file needs a connection`)}}),document.body.append(e),e.click()}),d.querySelectorAll(`[data-new]`).forEach(e=>e.addEventListener(`click`,async()=>{S?location.href=r(`gh/`+await _(e.dataset.new)):E()}))}function E(){let e={repo:``,token:``,branch:`main`,...x()},t=n(`<dialog class="gh-dialog">
    <form method="dialog">
      <h2>${w} Store documents in GitHub</h2>
      <p>Documents are saved to your own repository as readable markdown (<code>docs/&lt;name&gt;.md</code>), with their images next to them. Agents and people can edit them with git; the app merges those edits.</p>
      <label>Repository <input name="repo" placeholder="owner/name" required pattern="[\\w.-]+/[\\w.-]+" value="${o(e.repo)}"></label>
      <label>Branch <input name="branch" value="${o(e.branch||`main`)}" required></label>
      <label>Access token <input name="token" type="password" autocomplete="off" placeholder="github_pat_…" required value="${o(e.token)}"></label>
      <p class="hint">Use a <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">fine-grained token</a> for only this repository, with <b>Contents: read and write</b>. It stays in this browser and is only sent to GitHub.</p>
      ${g()?`<div class="gh-compact">
        <label>Combine history older than <select name="compact">
          ${[[0,`Off`],[3,`3 days`],[7,`7 days`],[30,`30 days`]].map(([e,t])=>`<option value="${e}"${d().days===e?` selected`:``}>${t}</option>`).join(``)}
        </select></label>
        <button type="button" class="compact-now"${d().days?``:` disabled`}>Combine now</button>
        <p class="hint">Rewrites the repository's history: older commits become one per document; recent ones and named versions stay. Runs once a day in the background. Anyone with a git clone then needs <code>git pull --rebase</code>.</p>
        <p class="hint compact-status"></p>
      </div>`:``}
      <p class="gh-error" hidden></p>
      <div class="actions">
        ${g()?`<button type="button" class="disconnect">Disconnect</button>`:``}
        <span class="grow"></span>
        <button value="cancel" formnovalidate>Cancel</button>
        <button class="primary save" value="save">Connect</button>
      </div>
    </form>
  </dialog>`);document.body.append(t);let r=t.querySelector(`form`),i=t.querySelector(`.gh-error`);t.querySelector(`.save`).addEventListener(`click`,async n=>{if(!r.reportValidity())return;n.preventDefault();let a={...e,repo:r.repo.value.trim(),branch:r.branch.value.trim()||`main`,token:r.token.value.trim()};i.hidden=!0,t.querySelector(`.save`).disabled=!0;try{await S(a),p(a),location.reload()}catch(e){i.textContent=e.message,i.hidden=!1}finally{t.querySelector(`.save`).disabled=!1}});let a=t.querySelector(`.compact-status`),s=()=>{let e=d(),t=e.result;a.textContent=!e.last||!t?``:`Last run ${new Date(e.last).toLocaleString()}: ${t.error?`failed: `+t.error:t.skipped?t.skipped:`${t.combined} commits combined into ${t.into}`}`};a&&s(),t.querySelector(`select[name="compact"]`)?.addEventListener(`change`,e=>{C(e.target.value),t.querySelector(`.compact-now`).disabled=!Number(e.target.value)}),t.querySelector(`.compact-now`)?.addEventListener(`click`,async e=>{let t=e.currentTarget;t.disabled=!0,a.textContent=`Reading history…`;try{await h({force:!0,onProgress:({done:e,total:t})=>{a.textContent=`Combining… ${e} of ${t}`}})?s():a.textContent=`Already running in another tab.`}catch{s()}finally{t.disabled=!1}}),t.querySelector(`.disconnect`)?.addEventListener(`click`,()=>{confirm(`Disconnect GitHub in this browser? Documents stay in the repository.`)&&(y(),location.reload())}),t.addEventListener(`close`,()=>t.remove()),t.showModal()}export{T as renderHome};