let posters = ["assets/poster.png", "assets/brochure1.png", "assets/brochure2.png"];
let index = 0;
const slide = document.getElementById("slide");
const sliderDots = document.querySelectorAll(".slider-dot");

function showSlide(newIndex) {
    if (slide) {
        index = newIndex;
        slide.src = posters[index];
    }

    sliderDots.forEach((dot, dotIndex) => {
        dot.classList.toggle("active", dotIndex === index);
    });
}

function changeSlide() {
    showSlide((index + 1) % posters.length);
}

setInterval(changeSlide, 3000);

sliderDots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
        showSlide(dotIndex);
    });
});

const promoVideo = document.getElementById("promo-video");

if (promoVideo) {
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                promoVideo.play();
            } else {
                promoVideo.pause();
            }
        });
    }, {
        threshold: 0.5
    });

    videoObserver.observe(promoVideo);
}
