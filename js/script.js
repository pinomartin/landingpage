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





