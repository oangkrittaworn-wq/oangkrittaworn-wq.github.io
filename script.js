const menu=document.getElementById("menu");
document.getElementById("menuOpen").onclick=()=>menu.classList.add("open");
document.getElementById("menuClose").onclick=()=>menu.classList.remove("open");
document.querySelectorAll("#menu a").forEach(a=>a.onclick=()=>menu.classList.remove("open"));
addEventListener("load",()=>setTimeout(()=>document.querySelector(".loader").classList.add("done"),1000));

const archive=document.getElementById("archiveGrid");
for(let i=1;i<=31;i++){
  const n=String(i).padStart(2,"0");
  const a=document.createElement("a");
  a.href=`assets/slides/${n}.jpg`; a.target="_blank";
  a.innerHTML=`<img src="assets/slides/${n}.jpg" alt="K9 company profile page ${n}" loading="lazy"><label>PAGE ${n}</label>`;
  archive.appendChild(a);
}

const observer=new IntersectionObserver(es=>{
  es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")})
},{threshold:.12});
document.querySelectorAll(".service-grid article,.work-grid article,.client-logos span,.archive-grid a").forEach(x=>observer.observe(x));
