const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-x-circle-fill");
  if(this.classList.toggle('bi-circle-fill')) {
    body.style.background = "#0B0A0A";
    body.style.transition = '2s';
  } else {
    body.style.background = "#13131F";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});
