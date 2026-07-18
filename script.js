const circles = document.querySelectorAll(".parallax");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    circles.forEach((circle, index) => {

        const speed = 0.04 + index * 0.01;

        circle.style.transform =
        `translateY(${scroll * speed}px)`;

    });

});