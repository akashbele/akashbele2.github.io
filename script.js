// ===============================
// Premium Portfolio Script
// ===============================

// Typing Animation
const typing = document.getElementById("typing");

const words = [
    "Java Backend Developer",
    "Spring Boot Developer",
    "Microservices Developer",
    "AWS Cloud Developer",
    "Spring AI Developer",
    "Generative AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typing.textContent = currentWord.substring(0, charIndex--);
    } else {
        typing.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex > currentWord.length) {
        isDeleting = true;
        speed = 1500;
    }

    if (isDeleting && charIndex < 0) {
        isDeleting = false;
        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Sticky Header
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,8,22,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(5,8,22,.65)";
        header.style.boxShadow = "none";

    }

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(

".about-card,.skill-card,.project-card,.timeline-item,.contact-card"

);

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(60px)";
    item.style.transition = ".8s ease";

});

function revealOnScroll() {

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// Hero Counters
// ===============================

const counters = document.querySelectorAll(".hero-stats h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let count = 0;

    function updateCounter() {

        const increment = Math.ceil(target / 50);

        if (count < target) {

            count += increment;

            if (count > target) count = target;

            counter.innerText = count + "+";

            requestAnimationFrame(updateCounter);

        }

    }

    updateCounter();

});


// ===============================
// Floating Profile Image
// ===============================

const profile = document.querySelector(".image-border");

if (profile) {

    let direction = 1;

    setInterval(() => {

        profile.style.transform = `translateY(${direction * 12}px)`;

        direction *= -1;

    }, 2000);

}


// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00bfff;
color:white;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 10px 20px rgba(0,191,255,.4);
z-index:999;
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ===============================
// Mouse Glow Effect
// ===============================

const glow = document.createElement("div");

glow.style.cssText = `
position:fixed;
width:25px;
height:25px;
background:#00bfff;
border-radius:50%;
filter:blur(15px);
pointer-events:none;
opacity:.6;
z-index:9999;
`;

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX - 12 + "px";
    glow.style.top = e.clientY - 12 + "px";

});


// ===============================
// Navbar Active Class Style
// ===============================

const style = document.createElement("style");

style.innerHTML = `
nav a.active{
color:#00bfff;
font-weight:600;
}
`;

document.head.appendChild(style);


// ===============================
// Console Message
// ===============================

console.log("%c🚀 Portfolio Developed by Akash Bele",
"color:#00bfff;font-size:18px;font-weight:bold;");
