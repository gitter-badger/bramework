var navbar = document.getElementsByClassName("js-navbar");
var wrapper = document.getElementsByClassName("js-wrapper");

function navbarScroll() {
  if (window.scrollY < 1) {
    navbar[0].classList.remove("navbar-scrolled")
    wrapper[0].classList.remove("wrapper-scrolled")
  }
  else {
    navbar[0].classList.add("navbar-scrolled")
    wrapper[0].classList.add("wrapper-scrolled")
  }
}