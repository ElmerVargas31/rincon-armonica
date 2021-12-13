/*
    Estudiante: Elmer Vargas Salazar
    Módulo: Empleo de Normas de Accesibilidad Web
*/

/*Reproducir y Pausar Audio (Testimonio)*/

var reproducir = document.getElementById("play");
var pausar = document.getElementById("pause");
var audio = document.getElementById("audio");

// I- Reproducir
reproducir.addEventListener("click", function(){
    audio.play();
})

// II- Pausar
pausar.addEventListener("click", function(){
    audio.pause();
})