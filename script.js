let slideIndex = 0;
let scrollAmount = 0;
const scrollStep = 270; // Adjust based on image size
const servicesContainer = document.querySelector('.services');


function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function slideRight() {
    const maxScroll = servicesContainer.scrollWidth - servicesContainer.clientWidth;
    scrollAmount += scrollStep;
    if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
    }
    servicesContainer.style.transform = `translateX(-${scrollAmount}px)`;
}

document.addEventListener("DOMContentLoaded", showSlides);
