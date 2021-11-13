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
let times=[25,5,20,0];

const progreso = document.getElementById('progreso');
let cantidad1 = 0;
let cantidad2 = 630;
var ronda=1;

var personalizar=prompt("El tiempo normal del metodo de pomodoro es de 25 minutos de trabajo, si desea modificarlo ingrese el numero de minutos, si no solo tecle 25");
personalizar= parseInt(personalizar);
pm.innerText=personalizar; // Funcion de personalizacion solo de temporizaor de trabajo//
var x=personalizar; 


function temporizador(){
//Temporizador de tarea


    if(ps.innerText != 0){
        ps.innerText--;
        if(ps.innerText<10){
            ps.innerText = '0'+ps.innerText;
        }
    }else if(pm.innerText != 0 && ps.innerText == 0){
        ps.innerText = 59;
        pm.innerText--; //<<<Funcion decremento de minutos 
    }
 
    //Short break
    if(pm.innerText == 0 && ps.innerText == 0){
 
        if (ds.innerText != 0){
            ds.innerText--;
            if(ds.innerText<10){
                ds.innerText = '0'+ds.innerText;
            }
        }else if(dm.innerText != 0 && ds.innerText == 0){ 
            ds.innerText = 59;
            dm.innerText--;
    }

}
    if(pm.innerText == 0 && ps.innerText == 1){
        ronda++;
    }
    if(dm.innerText == 0 && ds.innerText == 1){
        ronda++;
    }
 
//Contador de rounds 
if(pm.innerText ==0 && ps.innerText == 0 && dm.innerText == 0 && ds.innerText == 0){
    pm.innerText =times[0];
    ps.innerText =times[3];

    dm.innerText=times[1];
    ds.innerText=times[3];

    document.getElementById('round').innerText++;
 
//Long break 
}else if(counter.innerText ==4){
    alert("Hora de un Long BREAK");
    
    pm.innerText= times[3];
    ps.innerText= times[3];
    dm.innerText=times[2];
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

    if(pm.innerText == 0 && ps.innerText == 1 || dm.innerText == 0 && ds.innerText == 1){
            const music = new Audio('sonido.mp3');
            music.play();

    }

    if(cantidad2==0){
        cantidad1 = 0;
        cantidad2 = 630;
        progreso.style.strokeDashoffset=630;

    }

    if(ronda%2==0){
        if(ronda==8){
            x=20; 
            document.getElementById("pomodoro-temporizador").style.display = "none";
            document.getElementById("Break_timer").style.display = "flex";
              
        }else{
            x=5; 
            document.getElementById("pomodoro-temporizador").style.display = "none";
            document.getElementById("Break_timer").style.display = "flex";
        }
    }else if(ronda==1){
        x=personalizar;
        document.getElementById("pomodoro-temporizador").style.display = "flex";
        document.getElementById("Break_timer").style.display = "none";
    }else{
            x=25;
            document.getElementById("pomodoro-temporizador").style.display = "flex";
            document.getElementById("Break_timer").style.display = "none";

    }



}







function empezar(){
    if(iniciar_temporizador == undefined){
        iniciar_temporizador = setInterval(temporizador,1000);
    }

}

function restart(){
    pm.innerText =times[0];
    ps.innerText ='0'+times[3];

    dm.innerText= times[1];
    ds.innerText='0'+times[3];

    cantidad1 = 0;
    cantidad2 = 630;
    progreso.style.strokeDashoffset=630;
    
    document.getElementById("pomodoro-temporizador").style.display = "flex";
    document.getElementById("Break_timer").style.display = "none";
 
    clearInterval(iniciar_temporizador);
    iniciar_temporizador = undefined;
}

function parar(){
    clearInterval(iniciar_temporizador);
    iniciar_temporizador = undefined;
}

function enviarTexto(){
    var texto = document.getElementById("InputText2").value;
    var texto2 = document.getElementById("InputText").value = texto;
    
    if(texto === ''){
        alert('Escribe el nombre de la tarea!!');
    }


    if(texto2 != ''){
        document.getElementById("botonTexto").value = "cambiar";
        document.getElementById("InputText2").value = "";
    }
    
}
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cambio")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");

});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },600)
});

window.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == modalC){
        modal.classList.toggle("modal-close");
        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        },600)
    }
})



const open = document.getElementById('abrir');
const modal_container = document.getElementById('contenedor');
const close = document.getElementById('cerrar');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});


