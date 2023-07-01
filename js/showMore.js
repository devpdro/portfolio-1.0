function mostrar() {
  var x = document.querySelector(".hidden");
  var botao = document.querySelector("button");
  if (x.style.display === "none") {
    x.style.display = "block";
    botao.innerHTML = "Ver Menos";
  } else {
    x.style.display = "none";
    botao.innerHTML = "Ver Mais";
  }
}





