"use strict";

//Load
window.onload = function() {
  loadSlideMenu()
  actionButtonLoad();
};


//Scroll
var currentScroll;

window.onscroll = function(){

  navbarScroll();
  actionButtonScroll();

  currentScroll = window.scrollY;
}