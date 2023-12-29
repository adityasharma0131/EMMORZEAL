function toggleDropdown(dropdown) {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    if (!select || !caret || !menu || !options || !selected) {
        console.error('Dropdown elements not found.');
        return;
    }

    function toggleClasses() {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    }

    select.addEventListener('click', toggleClasses);

    
}

function closeDropdowns(event) {
    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');

        if (!dropdown.contains(event.target)) {
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
        }
    });
}

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => toggleDropdown(dropdown));
document.addEventListener('click', closeDropdowns);
