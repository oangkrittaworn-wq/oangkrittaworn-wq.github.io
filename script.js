const titles = [
'K9 / Cover',
'Communication Plan',
'Creative Activation',
'Service Activation',
'Krit Taworn / Creative Director',
'Our Clients / 01',
'Our Clients / 02',
'Wangprom Herb',
'Cetaphil',
'National Housing / Community',
'KAMU KAMU 15th Anniversary',
'Provet+',
'True Alpha Hub',
'PTT Station / Beyond Taste',
'KAMU KAMU Flagship Store',
'OWNDAYS Color Your Days',
'Be On Cloud',
'OWNDAYS Grand Pop-Up Store',
'E4 / Department of Land Transport',
'GAC / AION UT',
'National Housing 53 Anniversary',
'Galderma at Square centralwOrld',
'THAIFEX / ANUGA ASIA 2025',
'OWNDAYS Black Collection',
'Xiaomi Creative Music Marketing',
'GWM TANK 500',
'Lambretta',
'Campaign Online AWO',
'Campaign Online / Branding',
'Campaign TVC + Online / Branding',
'Campaign Review / Photo & VDO Production'
];
const slides = document.getElementById('slides');
for(let i=1;i<=31;i++){
  const sec=document.createElement('section');
  sec.className='slide '+(i%2===0?'dark':'light');
  sec.id=`page-${String(i).padStart(2,'0')}`;
  sec.innerHTML=`<div class="slide-frame"><img src="assets/slides/${String(i).padStart(2,'0')}.jpg" alt="${titles[i-1]}" loading="lazy"><div class="slide-label">${String(i).padStart(2,'0')} / ${titles[i-1]}</div></div>`;
  slides.appendChild(sec);
}
const grid=document.getElementById('indexGrid');
for(let i=1;i<=31;i++){
 const a=document.createElement('a'); a.className='index-item'; a.href=`#page-${String(i).padStart(2,'0')}`;
 a.innerHTML=`<img src="assets/slides/${String(i).padStart(2,'0')}.jpg" alt=""><span><b>${String(i).padStart(2,'0')}</b><span>${titles[i-1]}</span></span>`;
 a.addEventListener('click',()=>panel.classList.remove('open'));
 grid.appendChild(a);
}
const panel=document.getElementById('indexPanel');
document.getElementById('gridBtn').onclick=()=>panel.classList.add('open');
document.getElementById('closeIndex').onclick=()=>panel.classList.remove('open');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;document.getElementById('progressBar').style.width=(h>0?(window.scrollY/h*100):0)+'%'});
