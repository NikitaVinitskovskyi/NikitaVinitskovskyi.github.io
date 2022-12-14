const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.skills__percent-percentage'),
      lines = document.querySelectorAll('.skills__percent-bar_filled');

percent.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});