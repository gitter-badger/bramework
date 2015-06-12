//Función que crea y muestra un mensaje con el texto
//que indiquemos al llamar la función.

function snackbar(text, icon) {
  var body = document.getElementsByTagName("body")[0];
  var message = document.createElement("div");
    message.id = "snackbar";
    message.classList.add("snackbar");
  var string;
  if (icon != undefined) {
    string = "<p data-icon="+icon+">"+text+"</p>"
  }
  else {
    string = "<p>"+text+"</p>"
  }
  message.innerHTML = string;
  body.appendChild(message);

  //Funciones
  function openSnackbar() {
    message.classList.add("open");
  }
  function closeSnackbar() {
    message.classList.remove("open");
    setTimeout(function(){
      message.remove();
    }, 200);
  }

  //Eventos
  message.addEventListener("click", closeSnackbar);
  setTimeout(function(){
    openSnackbar();
  }, 0.1);

  setTimeout(function(){
    closeSnackbar();
  }, 4000);

}