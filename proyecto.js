var iniciar = document.getElementById('start');
var pausa = document.getElementById('pause');
var reiniciar = document.getElementById('reset');

var pm = document.getElementById('pmin');
var ps = document.getElementById('pseg');
var dm = document.getElementById ('dmin');
var ds = document.getElementById ('dseg');
var counter= document.getElementById('round');
var cycles= document.getElementById('cycle');
var iniciar_temporizador;
var x=25; 
let times=[25,5,20,0]

const progreso = document.getElementById('progreso');
let cantidad1 = 0;
let cantidad2 = 630;



function temporizador(){
//Temporizador de tarea
    if(ps.innerText != 0){
        ps.innerText--;
    }else if(pm.innerText != 0 && ps.innerText == 0){
        ps.innerText = 59;
        pm.innerText--; //<<<Funcion decremento de minutos 
    }
    //Short break
    if(pm.innerText == 0 && ps.innerText == 0){
        
        if (ds.innerText != 0){
            ds.innerText--;
        }else if(dm.innerText != 0 && ds.innerText == 0){
            ds.innerText = 59;
            dm.innerText--;

    }
}

//Contador de rounds 
if(pm.innerText ==0 && ps.innerText == 0 && dm.innerText == 0 && ds.innerText == 0){
    pm.innerText =times[0];
    ps.innerText =times[3];

    dm.innerText= times[1];
    ds.innerText=times[3];

    document.getElementById('round').innerText++;
//Long break 
}else if(counter.innerText ==4){
    alert("Hora de un Long BREAK");
    pm.innerText= times[3];
    ps.innerText= times[3];
    dm.innerText= times[2];
    ds.innerText=times[3];
    counter.innerText= times[3];
    document.getElementById('cycle').innerText++
} 
if(counter.innerText==1 && cycles.innerText== 1) {
    alert('Has completado una tarea')
    pm.innerText =times[0];
    ps.innerText =times[3];

    dm.innerText= times[1];
    ds.innerText=times[3];
    counter.innerText = times[3];
    cycles.innerText= times[3];
    clearInterval(iniciar_temporizador);
    iniciar_temporizador = undefined; //<< restablece el temporizador para usarse de nuevo 
    
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
    }

}

function restart(){
    pm.innerText =times[0];
    ps.innerText =times[3];

    dm.innerText= times[1];
    ds.innerText=times[3];

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
