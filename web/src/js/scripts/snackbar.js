//Función que crea y muestra un mensaje con el texto
//que indiquemos al llamar la función.

var snackBody;
var message;

function startSnackbar() {
  snackBody = document.getElementsByTagName("body")[0];
}

function snackbar(text) {
  snackBody.innerHTML += "<div id='snackbar' class='snackbar'><p>"+text+"</p><button class='t-alert'>Ok</button></div>";
  message = document.getElementById("snackbar");

  setTimeout(function(){
    message.classList.add("open");
  }, 0.1);

  setTimeout(function(){
    message.classList.remove("open");
    setTimeout(function(){
      message.remove();
    }, 200);

  }, 4000);
}