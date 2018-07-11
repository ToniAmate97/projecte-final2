function alerta() {
          alert("Comentari enviat correctament");
}
window.onload = function () {
var index = 0;
carrousel();
  function carrousel() {
    var i;
    var x = document.getElementsByClassName("Slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    index++;
    if (index > x.length) {
      index = 1;
    }
    x[index-1].style.display="block";
    setTimeout(carrousel,2000);
  }
}