document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar las imágenes de WhatsApp y TikTok
    const whatsappImg = document.querySelector(".whatsapp");
    const tiktokImg = document.querySelector(".tiktok");

    // Añadir eventos para la imagen de WhatsApp
    whatsappImg.addEventListener("mouseenter", function() {
        whatsappImg.closest(".wh").classList.add("hover-background");
    });

    whatsappImg.addEventListener("mouseleave", function() {
        whatsappImg.closest(".wh").classList.remove("hover-background");
    });

    // Añadir eventos para la imagen de TikTok
    tiktokImg.addEventListener("mouseenter", function() {
        tiktokImg.closest(".tk").classList.add("hover-background");
    });

    tiktokImg.addEventListener("mouseleave", function() {
        tiktokImg.closest(".tk").classList.remove("hover-background");
    });
});

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

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.contenido > *');

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.85;

        elements.forEach(element => {
            const boxTop = element.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Llamada inicial para mostrar elementos que ya están en la vista
});


