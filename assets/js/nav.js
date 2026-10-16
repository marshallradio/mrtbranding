(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const burger=$('.burger'),drawer=$('#drawer'),scrim=$('[data-scrim]');let last=null;
function openD(){last=document.activeElement;drawer.hidden=false;scrim.hidden=false;requestAnimationFrame(()=>{drawer.classList.add('open');scrim.classList.add('open')});
 burger.setAttribute('aria-expanded','true');burger.setAttribute('aria-label','Close navigation');document.body.classList.add('drawer-open');document.documentElement.classList.add('drawer-open');($('a',drawer)||drawer).focus();}
function closeD(){drawer.classList.remove('open');scrim.classList.remove('open');burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-label','Open navigation');
 document.body.classList.remove('drawer-open');document.documentElement.classList.remove('drawer-open');setTimeout(()=>{drawer.hidden=true;scrim.hidden=true},200);(last&&last!==document.body?last:burger).focus();}
burger&&burger.addEventListener('click',()=>burger.getAttribute('aria-expanded')==='true'?closeD():openD());
scrim&&scrim.addEventListener('click',closeD);
drawer&&drawer.addEventListener('click',e=>{if(e.target.closest('a'))closeD()});
drawer&&drawer.addEventListener('keydown',e=>{if(e.key!=='Tab')return;const f=$$('a,summary,button',drawer).filter(x=>x.offsetParent);const a=f[0],z=f[f.length-1];
 if(e.shiftKey&&document.activeElement===a){e.preventDefault();burger.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();burger.focus()}});
// dropdowns
const dds=$$('.nav .dd');function closeAll(ex){dds.forEach(d=>{if(d!==ex){d.classList.remove('open');$('button',d).setAttribute('aria-expanded','false')}})}
dds.forEach(d=>{const b=$('button',d);b.addEventListener('click',e=>{e.stopPropagation();const o=!d.classList.contains('open');closeAll(d);d.classList.toggle('open',o);b.setAttribute('aria-expanded',String(o));if(o)$('a',d).focus()});
 d.addEventListener('keydown',e=>{const items=$$('a',d),i=items.indexOf(document.activeElement);if(e.key==='ArrowDown'){e.preventDefault();(items[i+1]||items[0]).focus()}if(e.key==='ArrowUp'){e.preventDefault();(items[i-1]||items[items.length-1]).focus()}});
 d.addEventListener('focusout',e=>{if(!d.contains(e.relatedTarget)){d.classList.remove('open');b.setAttribute('aria-expanded','false')}});
 $$('a',d).forEach(a=>a.addEventListener('click',()=>closeAll()));});
document.addEventListener('click',()=>closeAll());
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const od=dds.find(d=>d.classList.contains('open'));if(od){closeAll();$('button',od).focus();return}if(burger&&burger.getAttribute('aria-expanded')==='true')closeD()}
 if(e.key==='/'&&!/input|textarea/i.test(document.activeElement.tagName)){const q=$('#q');if(q&&q.offsetParent){e.preventDefault();q.focus()}}});
// search
const form=$('[data-search]');form&&form.addEventListener('submit',e=>{e.preventDefault();const v=$('#q').value.trim().toLowerCase();if(!v)return;
 const o=$$('#qlist option');const hit=o.find(x=>x.value.toLowerCase()===v)||o.find(x=>x.value.toLowerCase().includes(v));if(hit)location.href=hit.dataset.href;});
$('#q')&&$('#q').addEventListener('change',e=>{const o=$$('#qlist option').find(x=>x.value===e.target.value);if(o)location.href=o.dataset.href});
// shadow on scroll
const h=$('[data-header]');addEventListener('scroll',()=>h&&h.classList.toggle('scrolled',scrollY>4),{passive:true});
})();
