document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const serviceItems = document.querySelectorAll('.service-item');

    function handleScroll() {
        serviceItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemPosition < windowHeight - 100) {
                item.classList.add('visible');
            }
        });
    }

    // Запускаем при скролле
    window.addEventListener('scroll', handleScroll);

    // Запускаем сразу, чтобы проверить, видны ли элементы на старте
    handleScroll();
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('#contacts a');

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff5722';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '#009688';
        });
    });
});

function showAnswer(id) {
    var answer = document.getElementById(id);
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
  }

  document.getElementById('toggleMapButton').addEventListener('click', function() {
    const mapContainer = document.getElementById('mapContainer');
    const button = document.getElementById('toggleMapButton');
    
    if (mapContainer.style.display === 'none') {
        mapContainer.style.display = 'block';
        button.textContent = 'Скрыть карту';
    } else {
        mapContainer.style.display = 'none';
        button.textContent = 'Показать карту';
    }
});



const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
});

function openPhoneModal() {
    document.getElementById('phoneModal').style.display = 'block';
}

function closePhoneModal() {
    document.getElementById('phoneModal').style.display = 'none';
}

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
    let modal = document.getElementById('phoneModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function openPhoneModal() {
    let modal = document.getElementById('phoneModal');
    modal.classList.add('modal-show'); // Добавляем класс для появления
    modal.classList.remove('modal-hide'); // Удаляем класс скрытия
    modal.style.display = 'block';
}

function closePhoneModal() {
    let modal = document.getElementById('phoneModal');
    modal.classList.remove('modal-show'); // Убираем класс для появления
    modal.classList.add('modal-hide'); // Добавляем класс скрытия
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Время, соответствующее длительности анимации
}

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
    let modal = document.getElementById('phoneModal');
    if (event.target == modal) {
        closePhoneModal();
    }
}

document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const li = button.parentElement;
        li.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".testimonial-slide");
    let currentIndex = 0;
    let slideInterval = setInterval(nextSlide, 5000);

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    document.querySelector(".next").addEventListener("click", () => {
        nextSlide();
        resetInterval();
    });

    document.querySelector(".prev").addEventListener("click", () => {
        prevSlide();
        resetInterval();
    });

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Show the first slide initially
    showSlide(currentIndex);
});

// Небольшая анимация появления overlay с задержкой
document.querySelectorAll('.contact-image-wrapper').forEach(wrapper => {
    wrapper.addEventListener('mouseover', () => {
        const overlay = wrapper.querySelector('.contact-overlay');
        overlay.style.transitionDelay = '0.1s';
    });

    wrapper.addEventListener('mouseleave', () => {
        const overlay = wrapper.querySelector('.contact-overlay');
        overlay.style.transitionDelay = '0s';
    });
});

const clientBlocks = document.querySelectorAll('.client-block');

window.addEventListener('scroll', () => {
    clientBlocks.forEach(block => {
        const blockPosition = block.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (blockPosition < screenPosition) {
            block.classList.add('animate');
        }
    });
});

// Функция для открытия окна чата
function openChat() {
    alert("Окно чата открыто! Напишите ваш вопрос.");
    // Здесь можно вставить код для интеграции с реальным чатом
}

function openChat() {
    window.open("https://t.me/DDez_profi", "_blank");
}