const menu=document.getElementById('menu');
document.getElementById('menuOpen').addEventListener('click',()=>menu.classList.add('open'));
document.getElementById('menuClose').addEventListener('click',()=>menu.classList.remove('open'));
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
window.addEventListener('load',()=>setTimeout(()=>document.querySelector('.loader').classList.add('done'),850));
const archive=document.getElementById('archiveGrid');
for(let i=1;i<=31;i++){
 const n=String(i).padStart(2,'0');
 const a=document.createElement('a'); a.href=`assets/slides/${n}.jpg`; a.target='_blank'; a.rel='noopener';
 a.innerHTML=`<img src="assets/slides/${n}.jpg" alt="K9 company profile page ${n}" loading="lazy"><label>PAGE ${n}</label>`;
 archive.appendChild(a);
}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
