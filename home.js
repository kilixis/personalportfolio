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

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.querySelectorAll(".scroll-row h1").forEach(h1 => {
  h1.addEventListener("mouseover", event => {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.dataset.value
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 8;
    }, 30);
  });
});
