const open = document.getElementById('icon-open'),
    nav_menu = document.querySelectorAll('.header__nav__list')[0];

open.addEventListener('click', function () {
    nav_menu.classList.toggle('nav__show');
    if (nav_menu.classList.contains("nav__show")) {
        open.src = "./images/icon-close.svg";
    }
    else {
        open.src = "./images/icon-hamburger.svg";
    }
})

function scrollHeader() {
  const scrollHeader = document.getElementById("scroll-header");

  if (this.scrollY > 100) {
    scrollHeader.classList.add('scrolled-header');
  } else {
    scrollHeader.classList.remove("scrolled-header");
  }
}
window.addEventListener("scroll", scrollHeader);
