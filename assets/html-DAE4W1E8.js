import{B as e,L as t,M as n,at as r,it as i}from"./ops-DHl3zy3h.js";function a(e){return String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}var o=e=>/^(https?:\/\/|\/(?!\/)|blob:)/i.test(e||``)?e:``;function s(e=[],{src:t=e=>e}={}){return e.map(e=>{if(e.type===`hardBreak`)return`<br>`;if(e.type===`inlineImage`)return`<img class="inline-image" src="${a(o(t(e.attrs?.src)))}" alt="${a(e.attrs?.alt||``)}"${e.attrs?.width?` width="${Math.round(e.attrs.width)}"`:``}>`;let n=a(e.text);for(let t of e.marks||[])t.type===`bold`?n=`<strong>${n}</strong>`:t.type===`italic`?n=`<em>${n}</em>`:t.type===`underline`?n=`<u>${n}</u>`:t.type===`strike`?n=`<s>${n}</s>`:t.type===`code`?n=`<code>${n}</code>`:t.type===`link`&&(n=`<a href="${a(t.attrs?.href)}" target="_blank" rel="noopener">${n}</a>`);return n}).join(``)}function c(e,{src:t=e=>e}={}){let n=()=>(e.content||[]).map(e=>c(e,{src:t})).join(``);switch(e.type){case`paragraph`:return`<p>${s(e.content,{src:t})||`<br>`}</p>`;case`heading`:return`<h${e.attrs.level}>${s(e.content,{src:t})}</h${e.attrs.level}>`;case`bulletList`:return`<ul>${n()}</ul>`;case`orderedList`:return`<ol start="${e.attrs?.start??1}">${n()}</ol>`;case`listItem`:return`<li>${n()}</li>`;case`blockquote`:return`<blockquote>${n()}</blockquote>`;case`codeBlock`:{let t=(e.content||[]).map(e=>e.text).join(``),n=e.attrs?.language;return`<div class="code-block">${n?`<div class="code-lang-bar"><span class="code-lang-tag">${a(r(n))}</span></div>`:``}<pre><code>${i(t,n)}</code></pre></div>`}case`horizontalRule`:return`<hr>`;case`image`:return`<div class="image-block"><img src="${a(o(t(e.attrs?.src)))}" alt="${a(e.attrs?.alt||``)}"${e.attrs?.width?` width="${Math.round(e.attrs.width)}"`:``}></div>`;case`attachment`:{let n=e.attrs?.name||`file`,r=(/\.([a-z0-9]{1,5})$/i.exec(n)?.[1]||`file`).slice(0,4).toUpperCase();return`<div class="attachment-block"><a class="attachment-chip" href="${a(o(t(e.attrs?.src)))}" download="${a(n)}"><span class="att-icon" style="--c:#1a73e8">${a(r)}</span><span class="att-name">${a(n)}</span></a></div>`}case`table`:return`<table class="doc-table"><tbody>${n()}</tbody></table>`;case`tableRow`:return`<tr>${n()}</tr>`;case`tableHeader`:case`tableCell`:{let t=e.type===`tableHeader`?`th`:`td`,r=e.attrs||{};return`<${t}${`${(r.colspan??1)>1?` colspan="${r.colspan}"`:``}${(r.rowspan??1)>1?` rowspan="${r.rowspan}"`:``}`}>${n()}</${t}>`}default:return``}}var l=e=>`
@page { ${t(e)} }
@media screen { body { max-width: ${Math.round(n(e)/72*1e4)/1e4}in; margin: ${e.margins.top}in auto; } }`,u=`
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin: 0; font: 11pt/1.15 Arial, sans-serif; color: #000; background: #fff; }
p { margin: 0; min-height: 1.15em; }
h1 { font-size: 26pt; font-weight: 400; line-height: 1.15; margin: 0 0 3pt; }
h2 { font-size: 20pt; font-weight: 400; line-height: 1.15; margin: 20pt 0 6pt; }
h3 { font-size: 16pt; font-weight: 400; line-height: 1.15; margin: 16pt 0 4pt; }
h4 { font-size: 14pt; font-weight: 400; line-height: 1.15; margin: 14pt 0 4pt; color: #434343; }
h1, h2, h3, h4 { break-after: avoid; page-break-after: avoid; }
body > :first-child { margin-top: 0; }
ul, ol { padding-left: 28pt; margin: 0; }
li { padding-left: 8pt; }
ol ol { list-style-type: lower-alpha; }
ol ol ol { list-style-type: lower-roman; }
blockquote { border-left: 3px solid #dadce0; margin: 4pt 0; padding: 0 12pt; color: #444; }
.code-block { position: relative; margin: 6pt 0; break-inside: avoid; }
.code-lang-bar { position: absolute; top: 4px; right: 8px; font: 500 8pt Arial, sans-serif; color: #5f6368; }
pre { background: #f1f3f4; border-radius: 6px; padding: 12px 14px 10px; font: 9.5pt/1.45 'Roboto Mono', Consolas, monospace; white-space: pre-wrap; overflow-wrap: anywhere; margin: 0; }
code { font-family: 'Roboto Mono', Consolas, monospace; background: #f1f3f4; padding: 1px 4px; border-radius: 3px; font-size: .92em; }
pre code { background: none; padding: 0; }
a { color: #1155cc; }
hr { border: 0; border-top: 1px solid #c4c7c5; margin: 12pt 0; }
.image-block { display: inline-block; vertical-align: bottom; max-width: 100%; margin: 6pt 6px 6pt 0; line-height: 0; break-inside: avoid; }
.image-block img, img.inline-image { max-width: 100%; height: auto; }
img.inline-image { vertical-align: baseline; }
.attachment-block { margin: 4pt 0; }
.attachment-chip { display: inline-flex; align-items: center; gap: 8px; padding: 4px 8px; border: 1px solid #dadce0; border-radius: 8px; color: #202124; text-decoration: none; font: 10pt Arial, sans-serif; }
.att-icon { min-width: 30px; padding: 0 4px; border-radius: 4px; background: var(--c); color: #fff; font: 700 8pt/18px Arial, sans-serif; text-align: center; }
table.doc-table { border-collapse: collapse; width: 100%; margin: 6pt 0; table-layout: fixed; }
.doc-table td, .doc-table th { border: 1px solid #000; padding: 5pt; vertical-align: top; text-align: left; overflow-wrap: anywhere; }
.doc-table th { font-weight: 700; background: #f3f3f3; }
.doc-table tr { break-inside: avoid; }
.hljs-comment, .hljs-quote { color: #6a737d; font-style: italic; }
.hljs-keyword, .hljs-selector-tag, .hljs-type, .hljs-doctag { color: #d73a49; }
.hljs-string, .hljs-regexp, .hljs-addition { color: #032f62; }
.hljs-number, .hljs-literal, .hljs-variable, .hljs-template-variable, .hljs-attr, .hljs-attribute, .hljs-operator { color: #005cc5; }
.hljs-title, .hljs-section { color: #6f42c1; }
.hljs-built_in, .hljs-symbol, .hljs-params { color: #e36209; }
.hljs-name, .hljs-tag, .hljs-meta { color: #22863a; }
`;function d({title:t,doc:n,src:r,page:i}){let o=(n.content||[]).map(e=>c(e,{src:r})).join(`
`);return`<!doctype html>
<html><head><meta charset="utf-8"><title>${a(t||`Untitled document`)}</title>
<style>${l(e(i))}${u}</style></head>
<body>
${o}
</body></html>
`}export{d as docToHtml,c as renderNode};