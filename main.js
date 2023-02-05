var ind = 1;
const skill = document.getElementsByClassName("skill")
const skills = [
    {nombre: "Curso de Udemy", habilidades: "Css, javascript, html, php", estado:"completado"},
    {nombre: "Curso de Udemy2", habilidades: "sql", estado: "en progreso"},
    {nombre: "Curso de la UCV", habilidades: "Java", estado: "completado"},
]
mostrarCarrusel(ind);
addskills();

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



function addskills(){
    for (i = 0; i<skills.length; i++) {
        let Css = "skill"
        if (skills.estado == "en progreso"){
            Css += "_incompleto"
        }else {
            Css += "_completo"
        }
        console.log(Css)
        const skillHtml = `
        <div class="skill">
        <h2 class="${Css}"> ${skills[i].nombre} </h2>
        <h3 class="${Css}"> ${skills[i].habilidades} </h3>
        </div>`
    skills.innerHTML += skillHtml
    }
   
}

    
    
