// navogation Bars
let humburger = document.querySelector(".humburger");
let nav = document.querySelector(".nav-list");

humburger.addEventListener('click', () => {
    humburger.classList.toggle("active");
    nav.classList.toggle("active");
});

/* ============================== typing animation ============================ */
var typed = new Typed(".typing",{
    strings:["Front End","Web Developer","Web Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* ========================== toggle style switcher =========================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/* ========================== theme light and dark mode =========================== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
})







