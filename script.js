document.addEventListener('DOMContentLoaded', () => {
    // Получаем элементы для первого видео
    const modal1 = document.getElementById("simulatorModal1");
    const btn1 = document.getElementById("startSimulatorButton");
    const closeModal1 = document.getElementById("closeModal1");
    const video1 = document.getElementById("simulatorVideo1");

    // Открытие и закрытие первого модального окна
    btn1.onclick = function() {
        modal1.style.display = "block";
        video1.play();
    }

    closeModal1.onclick = function() {
        modal1.style.display = "none";
        video1.pause();
        video1.currentTime = 0;
    }

    // Получаем элементы для второго видео
    const modal2 = document.getElementById("simulatorModal2");
    const btn2 = document.getElementById("startSimulatorButton2");
    const closeModal2 = document.getElementById("closeModal2");
    const video2 = document.getElementById("simulatorVideo2");

    // Открытие и закрытие второго модального окна
    btn2.onclick = function() {
        modal2.style.display = "block";
        video2.play();
    }

    closeModal2.onclick = function() {
        modal2.style.display = "none";
        video2.pause();
        video2.currentTime = 0;
    }

    // Закрытие при клике вне модального окна
    window.onclick = function(event) {
        if (event.target === modal1) {
            modal1.style.display = "none";
            video1.pause();
            video1.currentTime = 0;
        }
        if (event.target === modal2) {
            modal2.style.display = "none";
            video2.pause();
            video2.currentTime = 0;
        }
    }
});