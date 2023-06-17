// Находим контейнер с вкладками
const tabsContainer = document.getElementById('tabs1');
// Находим все элементы вкладок
const tabs = tabsContainer.querySelectorAll('.tab');
// Находим все элементы содержимого вкладок
const tabContents = tabsContainer.querySelectorAll('.tab__content');

// Функция для обработки события клика на вкладке
function handleTabClick(event) {
    // Проверяем, является ли кликнутый элемент вкладкой
    if (event.target.classList.contains('tab')) {
        // Удаляем активный класс у всех вкладок
        tabs.forEach(tab => tab.classList.remove('tab_active'));
        // Удаляем активный класс у всех элементов содержимого вкладок
        tabContents.forEach(content => content.classList.remove('tab__content_active'));

        // Добавляем активный класс текущей вкладке
        event.target.classList.add('tab_active');

        // Находим индекс текущей вкладки
        const tabIndex = Array.from(tabs).indexOf(event.target);
        // Находим соответствующий элемент содержимого вкладки
        const selectedContent = tabContents[tabIndex];
        // Добавляем активный класс элементу содержимого вкладки
        selectedContent.classList.add('tab__content_active');
    }
}

// Перебираем все элементы вкладок и регистрируем обработчик события клика
tabs.forEach(tab => tab.addEventListener('click', handleTabClick));