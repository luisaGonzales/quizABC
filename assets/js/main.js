'use strict';

// Objeto de preguntas
const app = {
    preguntaActual: 0,
    preguntas: {
        pregunta1: new Pregunta(1, `¿Cuál es la aerolínea más antigua del mundo?`, ["Avianca", "KLM", "Qantas"], "KML"),
        pregunta2: new Pregunta(2, `¿Cuál es el puerto más grande del mundo?`, ['Puerto de Shangai', 'Puerto de Singapur', 'Puerto de Rotterdam'], "Puerto de Shangai"),
        pregunta3: new Pregunta(3, `¿Cuál es la distancia más larga en bicicleta hacia atrás?`, ["89.30 km", "675.10 km", "337.60 km"], "337.60 km"),
        pregunta4: new Pregunta(4, `¿Cuál es la velocidad más alta alcanzada nunca por un autobús escolar?`, ["590 km/h", "320 km/h", "245 km/h"], "590 km/h"),
        pregunta5: new Pregunta(5, `¿Cuál es el viaje más largo con un tanque de gas?`, ["2,617 km", "3,568 km", "1,732 km"], "2,617 km"),
    },
    setup : function() {
        // Botón comenzar
        $("#comenzar").click(function(){
            let inicio = $("#inicio").addClass("no-display");
            console.log(inicio);
            // ponerImagen(app.preguntaActual);
            // ponerEstado(app.preguntaActual);
            $("#pregunta4").removeClass("no-display");
        });
    },
    imagenes:["assets/img/plane.svg", "assets/img/ship.svg", "assets/img/bycicle.svg", "assets/img/bus.svg","assets/img/car.svg", "assets/img/truck.svg"],
    secciones: ["#pregunta1", "#pregunta2", "#pregunta3", "#pregunta4", "#pregunta5"]
}

// Función constructura

function Pregunta (numero, pregunta, alternativas, correcta) {
    this.numero = numero;
    this.pregunta = pregunta;
    this.opciones = {
        alternativas: alternativas,
        correcta: correcta
    }
}

// function ponerImagen (num){    
//     let sectionImg = $("#imagen");
//     let imagen = $("<img>", {
//       "src": `${app.imagenes[num]}`,
//     });
//     sectionImg.append(imagen);
// }

// function ponerEstado (num){
//     let divEstado = $("#estado");
//     let estado = `${num} de 5 preguntas contestadas`
//     divEstado.append(estado);
// }

$(document).ready(app.setup);

