// Loader
window.addEventListener("load",()=>{
  const loader=document.getElementById("loader");
  setTimeout(()=>{loader.style.opacity=0;setTimeout(()=>loader.style.display="none",400);},1200);
});

// Cursor
const cursor=document.getElementById("cursor");
document.addEventListener("mousemove",e=>{
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
});

// Rotating words
const words=["Creative","Professional","Skilled"];
let wi=0;
setInterval(()=>{
  const el=document.getElementById("animWords");
  wi=(wi+1)%words.length;
  el.textContent=words[wi];
},2200);

// Hamburger menu
const hamburger=document.getElementById("hamburger");
const mobileNav=document.getElementById("mobileNav");
hamburger.addEventListener("click",()=>{ mobileNav.classList.toggle("open"); });

// Parallax effect
const visuals=document.querySelectorAll("[data-parallax]");
window.addEventListener("scroll",()=>{
  let y=window.scrollY;
  visuals.forEach(el=>{
    const rate=parseFloat(el.getAttribute("data-parallax"));
    el.style.transform=`translateY(${y*rate}px)`;
  });
});
