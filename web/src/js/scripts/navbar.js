var navbar = document.getElementsByClassName("js-navbar");

function navbarScroll() {
  if (window.scrollY < 1) {
    navbar[0].classList.remove("navbar_scrolled")
  }
  else {
    navbar[0].classList.add("navbar_scrolled")
  }
}