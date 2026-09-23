const loader=document.querySelector('.loader');
window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('done'),500));
const menu=document.getElementById('menu');
document.getElementById('menuOpen')?.addEventListener('click',()=>menu.classList.add('open'));
document.getElementById('menuClose')?.addEventListener('click',()=>menu.classList.remove('open'));
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
const reveals=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
reveals.forEach(el=>io.observe(el));
const modal=document.getElementById('profileModal');
const grid=document.getElementById('archiveGrid');
for(let i=1;i<=31;i++){
  const fig=document.createElement('figure');
  fig.innerHTML=`<img src="assets/slides/${String(i).padStart(2,'0')}.jpg" alt="K9 profile page ${i}" loading="lazy"><figcaption>PROFILE / ${String(i).padStart(2,'0')} — 31</figcaption>`;
  grid.appendChild(fig);
}
function openProfile(){modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('lock');modal.scrollTop=0}
function closeProfile(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('lock')}
document.getElementById('profileOpen')?.addEventListener('click',openProfile);
document.getElementById('profileOpen2')?.addEventListener('click',()=>{menu.classList.remove('open');openProfile()});
document.getElementById('profileClose')?.addEventListener('click',closeProfile);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeProfile()});
