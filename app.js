const toggleMenu = document.querySelector('.hamburger');
const nav = document.querySelector('.nav__menu');
const body = document.querySelector('body');
const hamburgerLine1 = document.querySelector('.hamburger__line1');
const hamburgerLine2 = document.querySelector('.hamburger__line2');
const hamburgerLine3 = document.querySelector('.hamburger__line3');

toggleMenu.addEventListener('click', () => {
    nav.classList.toggle('slider');
    body.classList.toggle('stopScroll');
    hamburgerLine1.classList.toggle('hamburger__transform--line1');
    hamburgerLine2.classList.toggle('hamburger__transform--line2');
    hamburgerLine3.classList.toggle('hamburger__transform--line3');
});

const slider = document.querySelector('.blogposts');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log(startX);
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
});