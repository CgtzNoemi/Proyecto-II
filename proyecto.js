var iniciar = document.getElementById('start');
var pausa = document.getElementById('pause');
var reiniciar = document.getElementById('reset');

var pm = document.getElementById('pmin');
var ps = document.getElementById('pseg');

var iniciar_temporizador;
var x=25;

const progreso = document.getElementById('progreso');
let cantidad1 = 0;
let cantidad2 = 630;



function temporizador(){

    if(ps.innerText != 0){
        ps.innerText--;
    }else if(pm.innerText != 0 && ps.innerText == 0){
        ps.innerText = 59;
        pm.innerText--;
    }
    if(ps.innerText<10){
        ps.innerText = '0' + ps.innerText;
    }

    cantidad1+=1;
    let valor = Math.ceil(cantidad2-=(630/(x*60)))
    progreso.style.strokeDashoffset=valor;

    if(cantidad2 === (0)){
      restart();
      const music = new Audio('sonido.mp3');
    music.play();
    }
    
}





function empezar(){
    if(iniciar_temporizador == undefined){
        iniciar_temporizador = setInterval(temporizador,1000);
    }else {
        alert("El temporizador está funcionando en este momento");
    }

}

function restart(){
    pm.innerText = x;
    ps.innerText = "00";
    cantidad1 = 0;
    cantidad2 = 630;
    progreso.style.strokeDashoffset=630;
 
    clearInterval(iniciar_temporizador);
    iniciar_temporizador = undefined;
}

function parar(){
    clearInterval(iniciar_temporizador);
    iniciar_temporizador = undefined;
}
