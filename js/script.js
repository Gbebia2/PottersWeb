const hero = document.getElementById("hero");

const images = [
    "images/hero1.webp",
    "images/hero2.jpeg",
    "images/hero3.jpeg",
    "images/hero4.webp"
];

let index = 0;

function changeHeroBackground() {
    hero.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}

changeHeroBackground();
setInterval(changeHeroBackground, 3000);