//Función que alterna la clase 'open' para abrir o cerrar
//el contenido extra del botón flotante
var actionButtonBox;

//Para añadir en '_globals.js'
function actionButtonLoad() {
  actionButtonBox = document.getElementById("action-button");
  if (actionButtonBox) {
    var button = actionButtonBox.getElementsByTagName("button")[0];
    button.addEventListener("click", actionButtonToggle);
    console.info("Cargado Action Button.")
  }
}

function actionButtonScroll() {
  if (window.scrollY > currentScroll) {
    actionButtonBox.classList.remove("action-button_open");
    actionButtonBox.classList.add("action-button_hidden");
  } else {
    actionButtonBox.classList.remove("action-button_hidden");
  }
}

function actionButtonToggle() {
  setTimeout(function() {
    actionButtonBox.classList.toggle("action-button_open");
  }, 0.1);
}
