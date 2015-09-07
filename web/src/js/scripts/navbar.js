var navbar = document.getElementsByClassName("js-navbar");

function navbarScroll() {
  if (window.scrollY < 5) {
    navbar[0].classList.remove("navbar-scrolled")
  }
  else {
    navbar[0].classList.add("navbar-scrolled")
  }
}