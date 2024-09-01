document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".contenedor");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".flecha-izquierda");
    const nextButton = document.querySelector(".flecha-derecha");
    let currentIndex = 0;
    let intervalId;

    function showSlide(index) {
        const offset = -100 * index;
        container.style.transform = `translateX(${offset}%)`;
        currentIndex = index;
    }

    function showNextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    }

    function showPrevSlide() {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    nextButton.addEventListener("click", function() {
        clearInterval(intervalId);
        showNextSlide();
        startAutoSlide();
    });

    prevButton.addEventListener("click", function() {
        clearInterval(intervalId);
        showPrevSlide();
        startAutoSlide();
    });

    function startAutoSlide() {
        intervalId = setInterval(showNextSlide, 10000); // Cambia la imagen cada 10 segundos
    }

    startAutoSlide(); // Inicia el deslizamiento automático
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}


