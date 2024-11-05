let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelector("#elegi-tu-arma");


let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e){

    let eleccionPc = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    // piedra => 0
    // papel => 1
    // tijera => 2

    if (eleccionPc === 0){
        eleccionPc = "piedra✊🏻";
    } else if (eleccionPc === 1){
        eleccionPc = "papel📋";
    } else if (eleccionPc === 2) {
        eleccionPc = "tijera✂️";
    }

    // piedra vence a tijera
    // tijera vence a papel
    // papel vence a piedra
    // si son iguales es empate

    if (
    (eleccionUsuario === "piedra✊🏻" && eleccionPc === "tijera✂️") || 
    (eleccionUsuario === "tijera✂️" && eleccionPc === "papel📋") ||
    (eleccionUsuario === "papel📋" && eleccionPc === "piedra✊🏻")){
        ganaUsuario();
    } else if (
        (eleccionPc === "piedra✊🏻" && eleccionUsuario === "tijera✂️") || 
    (eleccionPc === "tijera✂️" && eleccionUsuario === "papel📋") ||
    (eleccionPc === "papel📋" && eleccionUsiario === "piedra✊🏻") ){
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPc;

    if (puntosUsuario === 5 || puntosPC === 5){
        if (puntosUsuario === 5){
            instrucciones.innerText = "🔥 !Ganaste el juego! 🔥";
        }

        if (puntosPC === 5){
            instrucciones.innerText = "😭 ¡La computadora ganó el juego! 😭";
        }

        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }
}

function ganaUsuario(){
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥";
}

function ganaPC(){
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La computadora ganó un punto! 😭";
}

function empate(){
    contenedorGanaPunto.innerText = "¡Empate! 😱";
}

function reiniciarJuego(){
    reiniciar.classList.add("disabled");
    elegiTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosPC = 0;

    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar 5 puntos gana.";
}