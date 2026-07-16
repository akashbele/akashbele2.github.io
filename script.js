/* =====================================================
   AKASH BELE PORTFOLIO
===================================================== */

// ==========================
// Typing Animation
// ==========================

const words = [
    "Java Backend Developer",
    "Spring Boot Developer",
    "Microservices Engineer",
    "AWS Cloud Engineer",
    "Spring AI Developer",
    "Generative AI Enthusiast"
];

const typing = document.getElementById("typing");

let word = 0;
let letter = 0;
let deleting = false;

function type() {

    if (!typing) return;

    let current = words[word];

    if (!deleting) {

        typing.innerHTML =
            current.substring(0, letter++) +
            "<span class='cursor'>|</span>";

        if (letter > current.length) {
            deleting = true;
            setTimeout(type, 1500);
            return;
        }

    } else {

        typing.innerHTML =
            current.substring(0, letter--) +
            "<span class='cursor'>|</span>";

        if (letter < 0) {
            deleting = false;
            word = (word + 1) % words.length;
            letter = 0;
        }

    }

    setTimeout(type, deleting ? 40 : 90);

}

type();


// ==========================
// Sticky Header
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 50);

});


// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (scrollY >= top)
            current = section.id;

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current)
            link.classList.add("active");

    });

});


// ==========================
// Smooth Reveal
// ==========================

const reveal = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, { threshold: .15 });

document.querySelectorAll(
".card,.project-card,.timeline-item,.skills-grid div,.contact-card")
.forEach(item => {

    item.classList.add("hidden");

    reveal.observe(item);

});


// ==========================
// Scroll Progress Bar
// ==========================

const progress = document.createElement("div");

progress.id = "progress";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    let total =
        document.documentElement.scrollHeight -
        window.innerHeight;

    let percent = (window.scrollY / total) * 100;

    progress.style.width = percent + "%";

});


// ==========================
// Back To Top
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "<i class='fas fa-arrow-up'></i>";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

window.addEventListener("scroll",()=>{

    topBtn.classList.toggle("showTop",window.scrollY>400);

});


// ==========================
// Tilt Cards
// ==========================

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y-rect.height/2)/12);

const rotateY=((rect.width/2-x)/12);

card.style.transform=

`perspective(1000px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.04)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});


// ==========================
// Hero Floating Animation
// ==========================

const profile=document.querySelector(".profile-card");

if(profile){

setInterval(()=>{

profile.classList.toggle("float");

},2500);

}


// ==========================
// Mouse Glow
// ==========================

const glow=document.createElement("div");

glow.className="mouseGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


// ==========================
// Counter Animation
// ==========================

document.querySelectorAll("[data-count]").forEach(counter=>{

const update=()=>{

const target=+counter.dataset.count;

const value=+counter.innerText;

const speed=40;

const inc=Math.ceil(target/speed);

if(value<target){

counter.innerText=value+inc;

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

}

update();

});


// ==========================
// Button Ripple
// ==========================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.classList.add("ripple");

const x=e.clientX-this.offsetLeft;

const y=e.clientY-this.offsetTop;

circle.style.left=x+"px";

circle.style.top=y+"px";

this.appendChild(circle);

setTimeout(()=>circle.remove(),600);

});

});


// ==========================
// Preloader
// ==========================

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>loader.remove(),500);

}

});
