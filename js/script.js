let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let btnSkills = document.getElementById("skill");
let btnXP = document.getElementById("xp");
let btnContacto = document.getElementById("contacto");

let contador = 0;

boton.addEventListener("click", accionMenuDefault );
btnSkills.addEventListener("click", accionOpcionesMenu );
btnXP.addEventListener("click", accionOpcionesMenu );
btnContacto.addEventListener("click", accionOpcionesMenu );

//Scroll Reveal 
sr = new ScrollReveal();


console.log(sr)
sr.reveal('.headline', {delay: 300})
sr.reveal('.left', {distance: '100%', opacity: 1, origin: 'left'})
sr.reveal('.right', {distance: '100%', opacity: 1, origin: 'right', desktop: false, mobile: true})

const options = {
    delay: 0 , //ms
    distance: '', // ('px','rem','%')
    duration: 0, //ms
    easing: '', // ('ease','ease-in','step-start','ease-in-out')
    interval: 0, //ms (600=60fps)
    opacity: 0, // (0 to 1)
    origin: '', //('top','left','right','bottom')
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },          //(xe. 20)
    scale: 0, // (0 to 1)
    desktop: true, 
    mobile: true 
}








function accionMenuDefault(e) {
   e.preventDefault();
    if (contador == 0) {
        enlaces.className = ("enlaces dos");
        contador = 1;
    } else {
        enlaces.classList.remove("dos");
        enlaces.className = ("enlaces uno");
        contador = 0;
    }
}


function accionOpcionesMenu() {
    
     if (contador == 0) {
         enlaces.className = ("enlaces dos");
         contador = 1;
     } else {
         enlaces.classList.remove("dos");
         enlaces.className = ("enlaces uno");
         contador = 0;
     }
 }


/**Ir a Contacto */
$(document).ready(function(){
    'use strict';
    $("#boton-contacto").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#iconos-contacto").offset().top
                    }, 2000);
            }
    );
    $("#btn-home").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#divskills-h1").offset().top
                }, 1000);
        }
);
});





