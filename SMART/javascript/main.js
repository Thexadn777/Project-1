window.addEventListener("scroll", function(){
    let animacionUno = trabajo.getElementById("ilustracionSVG")
    let posicionAnimacion1 = animacionUno.getBoundingClientRect().top;
    let animationDos = document.querySelectorAll('.card-acerca');
    let posicionAnimacion2 = animationDos[0].getBoundingClientRect().top;
    let tamaĆ±oHeightPantalla =window.innerHeight/3.5;
    

    console.log(scrollY)
    if(posicionAnimacion1 < tamaĆ±oHeightPantalla){
        animacionUno.style.animation = "animacion1 1s ease-out";
    }
    if(posicionAnimacion2 < tamaĆ±oHeightPantalla){
        animationDos[0].style.animation = "animacion2 0.5s  ease";
        animationDos[1].style.animation = "animacion2 0.5s 0.5s ease";
        animationDos[2].style.animation = "animacion2 0.5s  1s ease";
    }
})