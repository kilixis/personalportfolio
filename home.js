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

document.querySelectorAll(".scroll-row h1").forEach(h1 => {
  h1.addEventListener("mouseover", event => {
    let iteration = 0;

    if (h1._glitchInterval) {
      clearInterval(h1._glitchInterval);
    }

    h1._glitchInterval = setInterval(() => {
      h1.innerText = h1.dataset.value
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return h1.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= h1.dataset.value.length) {
        clearInterval(h1._glitchInterval);
        h1._glitchInterval = null;
      }

      iteration += 1 / 8;
    }, 30);
  });
});
