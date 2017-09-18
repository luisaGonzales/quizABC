'use strict';

// Objeto de preguntas
const app = {
    preguntaActual: 0,
    respuestas: [undefined, undefined, undefined, undefined, undefined],
    secciones: ["0", "pregunta1", "pregunta2", "pregunta3", "pregunta4", "pregunta5", "enviarRespuestas", "resumenFinal"],
    correctas: [1, 0, 2, 0, 0],
    preguntas: {
        pregunta1: new Pregunta(1, `¿Cuál es la aerolínea más antigua del mundo?`, ["Avianca", "KLM", "Qantas"], "KLM"),
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
        // Botón Enviar
        $("#enviar").click(function () {
            app.mostrarResumen();
        });
        $("#nuevamente").click(function () {
            app.nuevoJuego();
        });
        $("atras").click(function(){
            app.volver();
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
        if ($("#enviarRespuestas").hasClass("no-display") == false) {
            app.enviarRespuestas();
        };
    },
    mostrarResumen: function () {
        // Eliminamos la sección visible
        $("#enviarRespuestas").addClass("no-display");
        $("#resumenFinal").removeClass("no-display");
        let tituloResumen = $("#tituloResumen");
        let contar = 0;
        let text = "";
        for (var i = 0; i < app.respuestas.length; i++) {
            if (app.respuestas[i][1] == app.correctas[i]) {
                contar++;
            }
        }
        if (contar == app.respuestas.length) {
            text = "5 de 5 correctas!!!"
        } else {
            text = `Oops ... ${contar} de 5 correctas!`
        }
        let titulo = (`<div id='resumenTitulo'><h1 class='titulo'>${text}</h1></div>`);
        // Agregamos el resumen
        let divResumen = $("#resumen");
        let resumen = "<div id='resumenCompleto'>";

        if (app.respuestas[0][1] == app.correctas[0]) {
            resumen += `<div id="resp1" class="correcta"> <strong>${app.preguntas.pregunta1.numero}. </strong>${app.preguntas.pregunta1.pregunta} <br><div class="text-center"> <strong> ${app.preguntas.pregunta1.opciones.alternativas[app.respuestas[0][1]]}. </strong></div>`
        } else {
            resumen += `<div id="resp1" class="incorrecta"> <strong>${app.preguntas.pregunta1.numero}. </strong>${app.preguntas.pregunta1.pregunta} <br><div class="text-center"> <strong><s> ${app.preguntas.pregunta1.opciones.alternativas[app.respuestas[0][1]]}.</s><span>${app.preguntas.pregunta1.opciones.correcta}</span></strong></div>`
        }
        if (app.respuestas[1][1] == app.correctas[1]) {
            resumen += `<div id="resp1" class="correcta"> <strong>${app.preguntas.pregunta2.numero}. </strong>${app.preguntas.pregunta2.pregunta} <br><div class="text-center"> <strong> ${app.preguntas.pregunta2.opciones.alternativas[app.respuestas[1][1]]}. </strong></div>`
        } else {
            resumen += `<div id="resp1" class="incorrecta"> <strong>${app.preguntas.pregunta2.numero}. </strong>${app.preguntas.pregunta2.pregunta} <br><div class="text-center"> <strong><s> ${app.preguntas.pregunta2.opciones.alternativas[app.respuestas[1][1]]}.</s><span>${app.preguntas.pregunta2.opciones.correcta}</span></strong></div>`
        }
        if (app.respuestas[2][1] == app.correctas[2]) {
            resumen += `<div id="resp1" class="correcta"> <strong>${app.preguntas.pregunta3.numero}. </strong>${app.preguntas.pregunta3.pregunta} <br><div class="text-center"> <strong> ${app.preguntas.pregunta3.opciones.alternativas[app.respuestas[2][1]]}. </strong></div>`
        } else {
            resumen += `<div id="resp1" class="incorrecta"> <strong>${app.preguntas.pregunta3.numero}. </strong>${app.preguntas.pregunta3.pregunta} <br><div class="text-center"> <strong><s> ${app.preguntas.pregunta3.opciones.alternativas[app.respuestas[0][1]]}.</s><span>${app.preguntas.pregunta3.opciones.correcta}</span></strong></div>`
        }
        if (app.respuestas[3][1] == app.correctas[3]) {
            resumen += `<div id="resp1" class="correcta"> <strong>${app.preguntas.pregunta4.numero}. </strong>${app.preguntas.pregunta4.pregunta} <br><div class="text-center"> <strong> ${app.preguntas.pregunta4.opciones.alternativas[app.respuestas[3][1]]}. </strong></div>`
        } else {
            resumen += `<div id="resp1" class="incorrecta"> <strong>${app.preguntas.pregunta4.numero}. </strong>${app.preguntas.pregunta4.pregunta} <br><div class="text-center"> <strong><s> ${app.preguntas.pregunta4.opciones.alternativas[app.respuestas[0][1]]}.</s><span>${app.preguntas.pregunta4.opciones.correcta}</span></strong></div>`
        }
        if (app.respuestas[4][1] == app.correctas[4]) {
            resumen += `<div id="resp1" class="correcta"> <strong>${app.preguntas.pregunta5.numero}. </strong>${app.preguntas.pregunta5.pregunta} <br><div class="text-center"> <strong> ${app.preguntas.pregunta5.opciones.alternativas[app.respuestas[4][1]]}. </strong></div></div>`
        } else {
            resumen += `<div id="resp1" class="incorrecta"> <strong>${app.preguntas.pregunta5.numero}. </strong>${app.preguntas.pregunta5.pregunta} <br><div class="text-center"> <strong><s> ${app.preguntas.pregunta5.opciones.alternativas[app.respuestas[0][1]]}.</s><span>${app.preguntas.pregunta5.opciones.correcta}</span></strong></div></div>`
        }

        tituloResumen.append(titulo);
        divResumen.append(resumen);
    },
    enviarRespuestas: function () {
        let divRespuestas = $(`#respuestas`);
        let respuestas =
            (` <div id="todasRespuestas">
            <div id="resp1"> <strong>${app.preguntas.pregunta1.numero}. </strong>${app.preguntas.pregunta1.pregunta} <br><div class="text-center"> <strong> ${app.preguntas.pregunta1.opciones.alternativas[app.respuestas[0][1]]}. </strong></div>\ <br>
            <div id="resp2"> <strong>${app.preguntas.pregunta2.numero}. </strong>${app.preguntas.pregunta2.pregunta} <br><div class="text-center"> <strong> ${app.preguntas.pregunta2.opciones.alternativas[app.respuestas[0][1]]}. </strong></div>\ <br>
            <div id="resp3"> <strong>${app.preguntas.pregunta3.numero}. </strong>${app.preguntas.pregunta3.pregunta} <br><div class="text-center"> <strong> ${app.preguntas.pregunta3.opciones.alternativas[app.respuestas[0][1]]}. </strong></div>\ <br>
            <div id="resp4"> <strong>${app.preguntas.pregunta4.numero}. </strong>${app.preguntas.pregunta4.pregunta} <br><div class="text-center"> <strong> ${app.preguntas.pregunta4.opciones.alternativas[app.respuestas[0][1]]}. </strong></div>\ <br>
            <div id="resp5"> <strong>${app.preguntas.pregunta5.numero}. </strong>${app.preguntas.pregunta5.pregunta} <br><div class="text-center"> <strong> ${app.preguntas.pregunta5.opciones.alternativas[app.respuestas[0][1]]}. </strong></div>\ <br>
            </div>`);
        divRespuestas.append(respuestas);
    },
    nuevoJuego: function () {
        $("#resumenFinal").addClass("no-display");
        app.preguntaActual = 1;
        app.mostrarPregunta(app.preguntaActual);
        app.respuestas = [undefined, undefined, undefined, undefined, undefined];
        $("#todasRespuestas").remove();
        $("#resumenCompleto").remove();
        $("#resumenTitulo").remove();

    },
    volver : function(){
        alert("chi");
        console.log(app.preguntaActual);
    }
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

$(document).ready(app.setup);