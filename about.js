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

const nouns = [
    'programmer',
    'web developer',
    'UI/UX designer',
    'pianist',
    'student',
    'badminton player',
    'chess player',
    'gamer',
    'F1 fan'
];

let currentIndex = 0;
const wordElement = document.getElementById('current-hello');

function changeWord() {
    wordElement.classList.remove('entering');
    wordElement.classList.add('exiting');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % nouns.length;
        wordElement.textContent = nouns[currentIndex];
        wordElement.classList.remove('exiting');
        wordElement.classList.add('entering');
    }, 90);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        wordElement.classList.add('entering');

        setTimeout(() => {
            setInterval(changeWord, 3000);
        }, 100);
    }, 3000);
});

//hmmmmm
//hmmmmmmmm
