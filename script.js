// Находим элементы гамбургер-меню
const mobileMenuToggle = document.getElementById("mobile-menu");
const mobileMenu = document.querySelector(".mobile-menu");

// Добавляем обработчик события клика
mobileMenuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
});