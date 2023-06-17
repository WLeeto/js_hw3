// Получаем все элементы с классом "dropdown"
const dropdowns = document.querySelectorAll('.dropdown');

// Добавляем обработчик события клика для каждого элемента
dropdowns.forEach(function(dropdown) {
    const valueContainer = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');

    // Обработчик события клика по кнопке
    valueContainer.addEventListener('click', function() {
        list.classList.toggle('dropdown__list_active');
    });

    // Обработчик события клика по пункту меню
    dropdown.querySelectorAll('.dropdown__item').forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const newValue = item.textContent.trim();
            valueContainer.textContent = newValue;
            list.classList.remove('dropdown__list_active');
        });
    });
});