(function () {
  // Создаем элемент target и добавляем его к body
  const target = document.createElement("span");
  target.classList.add("target");
  document.body.appendChild(target);

  // Получаем все ссылки в меню
  const menuLinks = document.querySelectorAll(".mainmenu a");
  // Задаем цвета для границы target
  const colors = ["red"];

  // Функция для установки позиции и стилей для target
  function positionTarget(link) {
    // Получаем размеры и координаты ссылки
    const { width, height, left } = link.getBoundingClientRect();
    // Выбираем случайный цвет границы
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Устанавливаем стили для target
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.left = `${left}px`;
    target.style.top = `${link.classList.contains("active") ? 74 : link.offsetTop - 4}px`;
    target.style.borderColor = color;
    target.style.transform = "none";
  }

  // Функция для активации ссылки
  function activateLink(link) {
    // Удаляем класс "active" и устанавливаем низкую прозрачность для всех ссылок
    menuLinks.forEach((menuLink) => {
      menuLink.classList.remove("active");
      menuLink.style.opacity = "0.25";
    });

   

    // Добавляем класс "active" и устанавливаем полную прозрачность для выбранной ссылки
    link.classList.add("active");
    link.style.opacity = "1";
    // Вызываем функцию установки позиции для target
    positionTarget(link);
  }

  // Функция для обработки клика по ссылке
  function handleLinkClick(link, event) {
    // Предотвращаем стандартное действие (переход по ссылке)
    event.preventDefault();
    // Вызываем функцию активации ссылки
    activateLink(link);
  }

  // Функция для обработки события "mouseenter" для ссылки
  function mouseenterFunc() {
    // Если ссылка не активна, вызываем функцию активации
    if (!this.classList.contains("active")) {
      activateLink(this);
    }
  }

  // Функция для обработки изменения размера окна
  function resizeFunc() {
    // Получаем активную ссылку
    const active = document.querySelector(".mainmenu a.active");
    // Если есть активная ссылка, вызываем функцию установки позиции для target
    if (active) {
      positionTarget(active);
    }
  }

  // Добавляем обработчики событий для каждой ссылки в меню
  menuLinks.forEach((menuLink) => {
    // Обработчик клика
    menuLink.addEventListener("click", (event) => handleLinkClick(menuLink, event));
    // Обработчик "mouseenter"
    menuLink.addEventListener("mouseenter", mouseenterFunc);
  });

  // Добавляем обработчик изменения размера окна
  window.addEventListener("resize", resizeFunc);

  // Пример события для активации элемента "Главная" при загрузке страницы
  document.getElementById("activateButton").addEventListener("click", function () {
    // Находим ссылку "Главная" в меню
    const homeLink = document.querySelector(".mainmenu a");
    // Если найдена, добавляем класс "active" и вызываем функцию активации
    if (homeLink) {
      homeLink.classList.add("active");
      activateLink(homeLink);
    }
  });
})();