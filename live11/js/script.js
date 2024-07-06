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
});

/* window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
}) */