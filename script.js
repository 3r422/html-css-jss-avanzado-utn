
/* video */ 
let video=document.querySelector('video');
let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");




setTimeout(()=>{document.getElementById('showTime').innerHTML=` Duracion video : ${video.duration.toFixed(2)}`},1000);

for (let i = 0; i < video.tim; i++) {
    console.log(video.currentTime)
    
}

playBoton.addEventListener('click',()=>{
    video.play()

   
});

pauseBoton.addEventListener('click',()=>{
    video.pause();
    flag=false;
});


let menu= document.querySelector('.menu');
let flag=false;
let contador=0;


function iniciar(){
   let imagenes = document.querySelectorAll('#cajaimagenes');
     soltar = document.getElementById('cajasoltar');
     soltar2 = document.getElementById('cajasoltar2'); 
     soltar3 = document.getElementById('cajasoltar3'); 

    for(var i=0; i<imagenes.length; i++){
        
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        imagenes[i].addEventListener('dragend', finalizado, false);
    }
    console.log(imagenes[i])
    soltar.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){
    e.preventDefault(); }, false)
      
    ;
    soltar.addEventListener('drop', soltado, false);


    soltar2.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado, false);


    soltar3.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado, false);

}
function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltado(e){
    e.preventDefault();
    console.log(e)
    let id=e.dataTransfer.getData('Text');
    let imagen=document.getElementById(id);
    imagen.style.display= 'none';
     e.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="275px">';
    contador++


}
function reinicio() {
    window.location.reload();
}
iniciar()
window.addEventListener('load', iniciar, false);

function mostrarMensajeGanaste() {
    let mensajeGanaste = document.createElement('div');
    mensajeGanaste.textContent = '¡Ganaste!';
    mensajeGanaste.style.fontSize = '24px';
    mensajeGanaste.style.fontWeight = 'bold';
    mensajeGanaste.style.textAlign = 'center';
    document.body.appendChild(mensajeGanaste);
}
