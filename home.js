document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const dotsContainer = document.querySelector(".container");
        dotsContainer.classList.add("fade-out");
        
        setTimeout(function () {
            const loading = document.querySelector(".loading");
            loading.classList.add("fade-out");
            
            setTimeout(function () {
                const navhr = document.querySelector("#navhr");
                const hero = document.querySelector("#hero");
                const items = document.querySelector("#items");
                hero.classList.add("fade-up");
                items.classList.add("fade-up");
                navhr.classList.add("expand");
            }, 800);
        }, 500);
    }, 1500);
});