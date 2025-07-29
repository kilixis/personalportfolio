document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const dotsContainer = document.querySelector(".container");
        dotsContainer.classList.add("fade-out");
        
        setTimeout(function () {
            const loading = document.querySelector(".loading");
            loading.classList.add("fade-out");
            
            setTimeout(function () {
                const hero = document.querySelector("#hero");
                const items = document.querySelector("#items");
                hero.classList.add("fade-up");
                items.classList.add("fade-up");
            }, 800);
        }, 500);
    }, 1500);
});

const greetings = [
    'Hello',
    'Bonjour', 
    'Nǐ hǎo',
    'Namaste', 
    'Marhaban',
    'Konnichiwa',
    'Annyeonghaseyo',
    'Olá'
];

let currentIndex = 0;
const wordElement = document.getElementById('current-hello');

function changeWord() {
    wordElement.classList.remove('entering');
    wordElement.classList.add('exiting');
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % greetings.length;
        wordElement.textContent = greetings[currentIndex];
        wordElement.classList.remove('exiting');
        wordElement.classList.add('entering');
    }, 90);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        wordElement.classList.add('entering');
        
        setTimeout(() => {
            setInterval(changeWord, 3000);
        }, 2000);
    }, 2500);
});

function handleParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.15;
    const videoRate = scrolled * -0.2;
    
    const helloLoop = document.querySelector('.hello-loop');
    const video = document.querySelector('.herosection video');
    const credit = document.getElementById('credit');
    
    if (helloLoop) {
        helloLoop.style.transform = `translate(-50%, calc(-50% + ${rate}px))`;
    }
    
    if (video) {
        video.style.transform = `translateY(${videoRate}px)`;
    }

    if (credit) {
        credit.style.transform = `translateY(${rate}px)`;
    }
}

let ticking = false;

function updateParallax() {
    handleParallax();
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);
window.addEventListener('load', handleParallax);