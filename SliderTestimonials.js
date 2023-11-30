// Индекс текущего слайда
let slideIndex = 0;

// Вызываем функцию showSlides с начальным индексом
showSlides(slideIndex);

// Получаем кнопки "предыдущий" и "следующий" из DOM
let prev = document.getElementById('prev');
let next = document.getElementById('next');

// Обработчик события для кнопки "следующий"
next.addEventListener("click", function () {
  showSlides(slideIndex += 1);
});

// Обработчик события для кнопки "предыдущий"
prev.addEventListener("click", function () {
  showSlides(slideIndex -= 1);
});

// Функция для установки текущего слайда по его индексу
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Основная функция для отображения слайдов
function showSlides(n) {
  // Получаем все элементы с классом "maincard" (возможно, это карточки слайдов)
  let slides = document.querySelectorAll(".testimonial .maincard");


  // Проверка на выход за границы слайдов, если достигнута крайняя левая или правая граница
  if (n > slides.length) {
    slideIndex = 2; // Перейти к первому слайду
  }
  if (n < 1) {
    slideIndex = slides.length; // Перейти к последнему слайду
  }

  // Скрыть все слайды с плавным переходом
  for (let slide of slides) {
    //slide.style.display = "none";
    slide.style.display = "none";
    slide.classList.remove("fadeInAnimation");
  }

  // Отобразить текущий слайд с плавным появлением

  slides[slideIndex - 1].style.display = "flex";
}

// Установка интервала для автоматической смены слайдов с плавным переходом каждые 5 секунд
let timer = setInterval(function () {
  slideIndex++;
  showSlides(slideIndex);
}, 2000);
