/* Binghalib Identity: shared behaviour for every page (theme, menu, search, sidebar, copy). */
(()=>{
const r=document.documentElement,ROOT=r.dataset.root||'',$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
/* theme: applied in <head> before paint; persisted across pages */
const t=$('#theme');
if(t)t.onclick=()=>{r.dataset.theme=r.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('bg-theme',r.dataset.theme)}catch(e){}};
/* toast + copy */
const toast=$('#toast');
function say(m){if(!toast)return;toast.textContent=m;toast.classList.add('show');clearTimeout(say.t);say.t=setTimeout(()=>toast.classList.remove('show'),1400)}
function copy(txt,msg){(navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(()=>say(msg||'Copied'),()=>say('Copy failed: select and copy manually'))}
$$('.sw[data-hex]').forEach(e=>{e.tabIndex=0;e.setAttribute('role','button');const go=()=>copy(e.dataset.hex,'Copied '+e.dataset.hex);e.onclick=go;e.onkeydown=k=>{if(k.key==='Enter'||k.key===' '){k.preventDefault();go()}}});
$$('[data-copy]').forEach(b=>b.onclick=()=>{const el=document.getElementById(b.dataset.copy);copy(el?el.textContent:b.dataset.copy,'Copied to clipboard')});
/* company directory: domain filter + text filter (also from ?q=) */
const cos=$$('.co'),q=$('#q');let f='all';
function apply(){const v=(q&&q.value||'').toLowerCase().trim();let n=0;cos.forEach(c=>{const ok=(f==='all'||c.dataset.div===f)&&(!v||c.textContent.toLowerCase().includes(v));c.style.display=ok?'':'none';if(ok)n++});const e=$('#cos-empty');if(e)e.hidden=n>0}
$$('.chip-f').forEach(b=>b.onclick=()=>{$$('.chip-f').forEach(x=>{x.classList.remove('on');x.setAttribute('aria-pressed','false')});b.classList.add('on');b.setAttribute('aria-pressed','true');f=b.dataset.f;apply()});
const qs=new URLSearchParams(location.search).get('q');
if(q&&qs){q.value=qs}
if(cos.length){apply();}
/* site search: pages, sections and companies (index in search-index.js) */
const box=$('#sr'),IDX=window.BG_SEARCH||[];let sel=-1;
function esc(s){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function results(v){v=v.toLowerCase().trim();if(!v)return[];const w=v.split(/\s+/);return IDX.map(x=>{const h=(x.t+' '+x.k).toLowerCase();if(!w.every(p=>h.includes(p)))return null;let s=x.t.toLowerCase().startsWith(v)?3:x.t.toLowerCase().includes(v)?2:1;if(x.c==='Company')s+=.5;return[s,x]}).filter(Boolean).sort((a,b)=>b[0]-a[0]).slice(0,8).map(a=>a[1])}
function render(){if(!box||!q)return;const v=q.value;const res=results(v);sel=-1;if(!v.trim()){box.hidden=true;box.innerHTML='';return}
 box.innerHTML=res.map(x=>`<li><a href="${ROOT+x.u}">${esc(x.t)}<small>${esc(x.c)}</small></a></li>`).join('')+`<li class="sr-all"><a href="${ROOT}companies.html?q=${encodeURIComponent(v)}">Search companies for “${esc(v)}” →<small>Company directory</small></a></li>`;box.hidden=false}
if(q){q.setAttribute('autocomplete','off');q.addEventListener('input',()=>{render();if(cos.length)apply()});
 q.addEventListener('keydown',e=>{const items=box?[...box.querySelectorAll('a')]:[];
  if(e.key==='ArrowDown'||e.key==='ArrowUp'){if(!items.length)return;e.preventDefault();sel=(sel+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;items.forEach((a,i)=>a.classList.toggle('sel',i===sel))}
  else if(e.key==='Enter'){e.preventDefault();const v=q.value.trim();if(!v)return;if(sel>=0&&items[sel]){location.href=items[sel].href}else if(cos.length){apply();box.hidden=true}else{location.href=ROOT+'companies.html?q='+encodeURIComponent(v)}}
  else if(e.key==='Escape'){if(box)box.hidden=true}});
 document.addEventListener('click',e=>{if(box&&!e.target.closest('.search'))box.hidden=true});}
document.addEventListener('keydown',e=>{if(e.key==='/'&&q&&document.activeElement!==q&&!/input|textarea/i.test(document.activeElement.tagName)){e.preventDefault();if(getComputedStyle($('.search')).display==='none')openSearch(true);q.focus()}});
/* header: menu + search toggles */
const hdr=$('.site-header'),mb=$('#menuBtn'),sb=$('#searchBtn'),nav=$('#mainnav');
function setMenu(o){hdr.classList.toggle('menu-open',o);mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu')}
function openSearch(o){hdr.classList.toggle('search-open',o);sb.setAttribute('aria-expanded',o);if(o){setMenu(false);q&&q.focus()}}
if(mb)mb.onclick=()=>{setMenu(!hdr.classList.contains('menu-open'));openSearch(false)};
if(nav)nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
if(sb)sb.onclick=()=>openSearch(!hdr.classList.contains('search-open'));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){setMenu(false);openSearch(false)}});
matchMedia('(min-width:1241px)').addEventListener('change',e=>{if(e.matches){setMenu(false);openSearch(false)}});
matchMedia('(min-width:901px)').addEventListener('change',e=>{if(e.matches)setMenu(false)});
/* grouped sidebar */
$$('.sbg-h').forEach(h=>h.onclick=()=>{const g=h.parentElement,o=!g.classList.contains('open');g.classList.toggle('open',o);h.setAttribute('aria-expanded',o)});
const st=$('.sb-toggle');if(st)st.onclick=()=>{const g=st.closest('.guide'),o=!g.classList.contains('sb-open');g.classList.toggle('sb-open',o);st.setAttribute('aria-expanded',o)};
})();
