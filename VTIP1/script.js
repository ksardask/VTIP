let currentIndex = 0;
let intervalId = null;
let slideInterval = 1000; // По умолчанию 1 секунда
const slides = document.querySelectorAll('.slide');
const message = document.getElementById('message');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function startSlider() {
    if (intervalId) return; // Если слайдер уже запущен

    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length; // Переход к следующему слайду
        showSlide(currentIndex);

        // Проверка на завершение показа всех слайдов
        if (currentIndex === 0) {
            clearInterval(intervalId);
            intervalId = null;
            showMessage();
        }
    }, slideInterval);
}

function resumeSlider() {
    if (!intervalId) startSlider();
}

function stopSlider() {
    clearInterval(intervalId);
    intervalId = null;
}

function showMessage() {
    message.textContent = 'Показ завершён!';
    message.style.display = 'block';
}

document.getElementById('start').addEventListener('click', () => {
    const userInterval = parseInt(document.getElementById('interval').value);
    if (!isNaN(userInterval) && userInterval > 0) {
        slideInterval = userInterval;
    }
    currentIndex = 0; // Сбрасываем индекс на 0 при старте
    showSlide(currentIndex);
    message.style.display = 'none'; // Скрыть сообщение
    startSlider();
});

document.getElementById('resume').addEventListener('click', resumeSlider);
document.getElementById('stop').addEventListener('click', stopSlider);