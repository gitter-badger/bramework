"use strict";

//Load
window.onload = function() {
  loadMenu();
//  actionButtonLoad();
};


//Scroll
var currentScroll;

window.onscroll = function(){

  navbarScroll();
//  actionButtonScroll();

  currentScroll = window.scrollY;
}
