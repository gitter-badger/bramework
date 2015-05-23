//Función que alterna la clase 'open' para abrir o cerrar
//el contenido extra del botón flotante

function loadActionButton() {
  action = document.getElementById("action-button");
  button = action.getElementsByTagName("button")[0];
  button.addEventListener("click", actionButton);
}

var action;
var button;

function actionButton() {

//  var content = action.getElementsByClassName("action-button-content");
//  content.style.display = "flex";

  setTimeout(function(){
    action.classList.toggle("open");
  }, 0.1);
}