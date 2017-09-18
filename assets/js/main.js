'use strict';

// Objeto de preguntas
const app = {
    preguntaActual: 0,
    respuestas: [undefined, undefined, undefined, undefined, undefined],
    secciones: ["0", "pregunta1", "pregunta2", "pregunta3", "pregunta4", "pregunta5", "enviarRespuestas"],
    preguntas: {
        pregunta1: new Pregunta(1, `¿Cuál es la aerolínea más antigua del mundo?`, ["Avianca", "KLM", "Qantas"], "KML"),
        pregunta2: new Pregunta(2, `¿Cuál es el puerto más grande del mundo?`, ['Puerto de Shangai', 'Puerto de Singapur', 'Puerto de Rotterdam'], "Puerto de Shangai"),
        pregunta3: new Pregunta(3, `¿Cuál es la distancia más larga en bicicleta hacia atrás?`, ["89.30 km", "675.10 km", "337.60 km"], "337.60 km"),
        pregunta4: new Pregunta(4, `¿Cuál es la velocidad más alta alcanzada nunca por un autobús escolar?`, ["590 km/h", "320 km/h", "245 km/h"], "590 km/h"),
        pregunta5: new Pregunta(5, `¿Cuál es el viaje más largo con un tanque de gas?`, ["2,617 km", "3,568 km", "1,732 km"], "2,617 km"),
    },
    setup: function () {
        // Botón comenzar
        $("#comenzar").click(function () {
            app.preguntaActual += 1;
            let inicio = $("#inicio").addClass("no-display");
            app.mostrarPregunta(app.preguntaActual);
        });
    },
    mostrarPregunta: function (sgtPregunta) {
        $(`#${app.secciones[sgtPregunta]}`).removeClass("no-display");
    },
    siguientePregunta: function () {
        $(`#${app.secciones[app.preguntaActual]}`).addClass("no-display");
        respuestaMarcada();
        app.preguntaActual += 1;
        $(`#${app.secciones[app.preguntaActual]}`).removeClass("no-display");
        if($("#enviarRespuestas").hasClass("no-display") == false){
            enviarRespuestas();
        }
    },
}

// Función constructura
function Pregunta(numero, pregunta, alternativas, correcta) {
    this.numero = numero;
    this.pregunta = pregunta;
    this.opciones = {
        alternativas: alternativas,
        correcta: correcta
    }
}

function respuestaMarcada() {
    $(`#${app.preguntaActual}`).click(function (e) {
        let respuestaID = e.target.id;
        app.respuestas[app.preguntaActual - 2] = respuestaID;   
        console.log(respuestaID);
    });
}

function enviarRespuestas() {
    let divRespuestas = $(`#respuestas`);
    let respuestas = 
    (` 
        <strong>${app.preguntas.pregunta1.numero}. </strong>${app.preguntas.pregunta1.pregunta} <br><div class="text-center"> <strong> ${app.preguntas.pregunta1.opciones.alternativas[app.respuestas[0][1]]}. </strong></div>\ <br>
        <strong>${app.preguntas.pregunta2.numero}. </strong>${app.preguntas.pregunta2.pregunta} <br><div class="text-center"> <strong> ${app.preguntas.pregunta2.opciones.alternativas[app.respuestas[0][1]]}. </strong></div>\  <br>
        <strong>${app.preguntas.pregunta3.numero}. </strong>${app.preguntas.pregunta3.pregunta} <br><div class="text-center"> <strong> ${app.preguntas.pregunta3.opciones.alternativas[app.respuestas[0][1]]}. </strong></div>\ <br>
        <strong>${app.preguntas.pregunta4.numero}. </strong>${app.preguntas.pregunta4.pregunta} <br><div class="text-center"> <strong> ${app.preguntas.pregunta4.opciones.alternativas[app.respuestas[0][1]]}. </strong></div>\ <br>
        <strong>${app.preguntas.pregunta5.numero}. </strong>${app.preguntas.pregunta5.pregunta} <br><div class="text-center"> <strong> ${app.preguntas.pregunta5.opciones.alternativas[app.respuestas[0][1]]}. </strong></div>\ <br>
        `
    );
    divRespuestas.append(respuestas);
}


$(document).ready(app.setup);