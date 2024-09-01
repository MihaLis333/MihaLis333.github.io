window.addEventListener('load', function () {
    const elements = document.querySelectorAll('.divider__elem');
    const initialDelay = 3000; // 3 секунды для первого элемента
    const delayBetween = 400;  // 0.4 секунды для последующих элементов


    elements.forEach((elem, index) => {
        // Показать элемент и начать его выезд на ось
        setTimeout(() => {
            elem.classList.add('show', 'move-out');

        }, initialDelay + index * delayBetween);
    });

    // Запуск вращения для всех элементов после того, как все выедут на ось
    setTimeout(() => {
        elements.forEach((elem) => {
            elem.classList.add('start-rotation');
            document.querySelector('.promo-girl__img').classList.add('up');

        });
    }, initialDelay + elements.length * delayBetween + 1000); // Дополнительно 1 секунда после последнего выезда
});


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu_item'),
          hamburger = document.querySelector('.hamburger');

    const toggleMenu = () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    };

    hamburger.addEventListener('click', (event) => {
        event.stopPropagation(); // Останавливаем всплытие события, чтобы не сработал обработчик на документе
        toggleMenu();
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            toggleMenu();
        });
    });

    // Добавляем обработчик на весь документ
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickInsideHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideHamburger) {
            if (menu.classList.contains('menu_active')) {
                toggleMenu();
            }
        }
    });

    // $('.promo__form-input').validate();
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.promo__form');
    const inputField = document.getElementById('inputField');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        // Сброс сообщения об ошибке
        errorMessage.textContent = '';

        // Получаем значение из текстового поля
        const value = inputField.value;

        // Регулярное выражение для проверки на допустимые символы (латиница, кириллица, цифры, пробелы, без специальных символов)
        const validCharacters = /^[a-zA-Zа-яА-Я0-9\s]*$/;

        // Регулярное выражение для проверки на недопустимые символы
        const invalidCharacters = /[!@#$%^&*()]/;

        // Проверяем длину и символы
        if (value.length < 4 || value.length > 12) {
            errorMessage.textContent = 'The input must be between 4 and 12 characters.';
            event.preventDefault(); // Останавливаем отправку формы
        } else if (invalidCharacters.test(value)) {
            errorMessage.textContent = 'The input contains invalid characters: !@#$%^&*().';
            event.preventDefault(); // Останавливаем отправку формы
        } else if (!validCharacters.test(value)) {
            errorMessage.textContent = 'The input contains invalid characters.';
            event.preventDefault(); // Останавливаем отправку формы
        }
    });
});


$(document).ready(function() {
    $.ajax({
        url: 'https://baconipsum.com/api/?type=lucky',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // Объединяем массив в строку и обрезаем до 200 символов
            var description = data.join(' ').substring(0, 200);
                    
            // Добавляем многоточие, если текст был обрезан
            if (description.length === 200) {
                description += '...';
            }
            
            $('#promo_description').text(description);
        },
        error: function() {
            $('#promo_description').text('Не удалось загрузить описание.');
        }
    });
});