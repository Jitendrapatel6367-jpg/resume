// Navbar scroll
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',scrollY>10);
});
// Hamburger
const ham=document.getElementById('hamburger'),mob=document.getElementById('mob-menu');
ham.addEventListener('click',()=>{
  const o=mob.classList.toggle('open');
  ham.innerHTML=o?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>';
});
function closeMenu(){mob.classList.remove('open');ham.innerHTML='<i class="fa-solid fa-bars"></i>';}
// Stars
let rating=0;
document.querySelectorAll('#starPick i').forEach(s=>{
  s.addEventListener('click',()=>{
    rating=+s.dataset.v;
    document.querySelectorAll('#starPick i').forEach((x,i)=>{
      x.className=i<rating?'fa-solid fa-star lit':'fa-regular fa-star';
    });
  });
});
function submitReview(){alert('Shukriya! Aapki review ke liye bahut dhanyavaad. 🙏');document.getElementById('reviewModal').classList.remove('show');}
document.getElementById('reviewModal').addEventListener('click',function(e){if(e.target===this)this.classList.remove('show');});

// Lightbox
const lbSrcs = [
  document.querySelector('#gallery img:nth-of-type(1)'),
];
const galleryImgs = document.querySelectorAll('#gallery img');
const lbImgEl = document.getElementById('lb-img');
const lbCaps = ['Workshop Interior','Engine Cutaway','Servicing Work','Our Garage','Engine Bay'];
let lbIdx = 0;
const lbSrcArr = [];
galleryImgs.forEach(img => lbSrcArr.push(img.src));

function openLightbox(i){
  lbIdx=i;
  lbImgEl.src=lbSrcArr[i];
  document.getElementById('lb-caption').textContent=lbCaps[i];
  document.getElementById('lightbox').style.display='flex';
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').style.display='none';
  document.body.style.overflow='';
}
function nextImg(){lbIdx=(lbIdx+1)%lbSrcArr.length;lbImgEl.src=lbSrcArr[lbIdx];document.getElementById('lb-caption').textContent=lbCaps[lbIdx];}
function prevImg(){lbIdx=(lbIdx-1+lbSrcArr.length)%lbSrcArr.length;lbImgEl.src=lbSrcArr[lbIdx];document.getElementById('lb-caption').textContent=lbCaps[lbIdx];}
document.getElementById('lightbox').addEventListener('click',function(e){if(e.target===this)closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();if(e.key==='ArrowRight')nextImg();if(e.key==='ArrowLeft')prevImg();});