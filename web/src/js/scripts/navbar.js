var navbar = document.getElementsByClassName("js-navbar");

window.onscroll = function () {

  if (window.scrollY < 1) {
    scrollTop();
  }
  else {
    scrollMiddle();
  }
}

function scrollTop() {
  navbar[0].classList.remove("navbar-scrolled")
}

function scrollMiddle() {
  navbar[0].classList.add("navbar-scrolled")
}