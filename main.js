var ind = 1;
mostrarCarrusel(ind);

function plusSlides(n) {
    mostrarCarrusel(ind += n);
}

function currentSlide(n) {
    mostrarCarrusel(ind = n);
}

function mostrarCarrusel(n) {
  var i;
  var carrusel = document.getElementsByClassName("micarrusel");
  if (n > carrusel.length) {ind = 1} 
  if (n < 1) {ind = carrusel.length}
  for (i = 0; i < carrusel.length; i++) {
      carrusel[i].style.display = "none"; 
  }
  carrusel[ind-1].style.display = "block"; 
}