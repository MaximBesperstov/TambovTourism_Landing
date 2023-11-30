var currentSlide = 2; // Начальный слайд (индексация с 0)

document.addEventListener("DOMContentLoaded", function() {
    // Запускаем функцию сразу после загрузки страницы
    changeImage(currentSlide);
});

function changeImage(slideIndex) {
    // Получаем элементы
    var heroimg = document.querySelector(".hero .heroimg");
    var links = document.querySelectorAll('.number a');

    // Устанавливаем класс "active" для текущей ссылки и снимаем его с остальных
    links.forEach(function(link, index) {
        if (index === slideIndex) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Обновляем фоновое изображение
    switch (slideIndex) {
        case 0:
            heroimg.style.backgroundImage = "url('img/BG1.jpg')";
            break;
        case 1:
            heroimg.style.backgroundImage = "url('img/BG2.jpg')";
            break;
        case 2:
            heroimg.style.backgroundImage = "url('img/BG3.bmp')";
            break;
        case 3:
            heroimg.style.backgroundImage = "url('img/BG4.jpg')";
            break;
        case 4:
            heroimg.style.backgroundImage = "url('img/BG5.jpg')";
            break;
        default:
            break;
    }

    // Обновляем текущий слайд
    currentSlide = slideIndex;
}