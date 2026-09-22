const total = 31;
const slides = document.getElementById("slides");
const current = document.getElementById("current");
const progress = document.getElementById("progressBar");
const grid = document.getElementById("indexGrid");
const panel = document.getElementById("indexPanel");

for(let i=2;i<=total;i++){
  const n=String(i).padStart(2,"0");
  const section=document.createElement("section");
  section.className="slide";
  section.id=`page-${n}`;
  section.innerHTML=`<div class="slide-frame"><img src="assets/slides/${n}.jpg" alt="Knine company profile page ${n}" loading="lazy"><div class="slide-number">${n} / ${String(total).padStart(2,"0")}</div></div>`;
  slides.appendChild(section);

  const a=document.createElement("a");
  a.className="index-item";
  a.href=`#page-${n}`;
  a.innerHTML=`<img src="assets/slides/${n}.jpg" alt=""><div class="row"><span>PAGE ${n}</span><span>VIEW ↗</span></div>`;
  a.addEventListener("click",()=>panel.classList.remove("open"));
  grid.appendChild(a);
}

document.getElementById("menuBtn").onclick=()=>{panel.classList.add("open");panel.setAttribute("aria-hidden","false")};
document.getElementById("closeBtn").onclick=()=>{panel.classList.remove("open");panel.setAttribute("aria-hidden","true")};

const pages=[document.querySelector(".hero"),...document.querySelectorAll(".slide")];
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const idx=pages.indexOf(e.target);
      const num=String(idx+1).padStart(2,"0");
      current.textContent=num;
    }
  });
},{threshold:.55});
pages.forEach(p=>io.observe(p));

function updateProgress(){
  const max=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=(max>0 ? scrollY/max*100 : 0)+"%";
}
addEventListener("scroll",updateProgress,{passive:true});
updateProgress();

addEventListener("keydown",e=>{
  if(e.key==="Escape") panel.classList.remove("open");
  if(e.key==="ArrowDown" || e.key==="PageDown"){
    e.preventDefault();
    const active=pages.findIndex(p=>Math.abs(p.getBoundingClientRect().top)<innerHeight*.35);
    const next=pages[Math.min(active+1,pages.length-1)];
    next?.scrollIntoView({behavior:"smooth"});
  }
  if(e.key==="ArrowUp" || e.key==="PageUp"){
    e.preventDefault();
    const active=pages.findIndex(p=>Math.abs(p.getBoundingClientRect().top)<innerHeight*.35);
    const prev=pages[Math.max(active-1,0)];
    prev?.scrollIntoView({behavior:"smooth"});
  }
});
