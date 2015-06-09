//Función que alterna la clase 'open' para abrir o cerrar
//el contenido extra del botón flotante
var actionButtonBox;

function loadActionButton() {
  actionButtonBox = document.getElementById("action-button");
  if (actionButtonBox) {
    activator.addEventListener('click', swipeMenu);
    var button = actionButtonBox.getElementsByTagName("button")[0];
    button.addEventListener("click", actionButton);
    console.info("Cargado Action Button.")
  }
}

function actionButton() {
  setTimeout(function(){
    actionButtonBox.classList.toggle("open");
  }, 0.1);
}