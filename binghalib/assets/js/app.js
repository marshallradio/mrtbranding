(()=>{const r=document.documentElement,t=document.getElementById('theme');
const s=localStorage.getItem('bg-theme');if(s)r.dataset.theme=s;
t.onclick=()=>{r.dataset.theme=r.dataset.theme==='dark'?'light':'dark';localStorage.setItem('bg-theme',r.dataset.theme)};
const toast=document.getElementById('toast');
document.querySelectorAll('.sw[data-hex]').forEach(e=>e.onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText(e.dataset.hex);toast.textContent='Copied '+e.dataset.hex;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1400)});
const cos=[...document.querySelectorAll('.co')];let f='all';const q=document.getElementById('q');
function apply(){const v=(q.value||'').toLowerCase();cos.forEach(c=>{const okF=f==='all'||c.dataset.div===f;const okQ=!v||c.textContent.toLowerCase().includes(v);c.style.display=okF&&okQ?'':'none'})}
document.querySelectorAll('.chip-f').forEach(b=>b.onclick=()=>{document.querySelectorAll('.chip-f').forEach(x=>x.classList.remove('on'));b.classList.add('on');f=b.dataset.f;apply()});
q.addEventListener('input',()=>{apply();if(q.value)document.getElementById('companies').scrollIntoView({behavior:'smooth'})});
document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==q){e.preventDefault();q.focus()}});
})();
