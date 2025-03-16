// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres
let amigos = [];
let numeroSecreto="";

function agregarAmigo() {

    const nombres = document.getElementById('amigo').value.trim(); //defino como constante los nombres, porque en teoria no cambian.
    //.trim() quita los espacios al inicio y final del texto.

    if (nombres =="" || nombres == " ") { //se evalua si esta ingresando un valor vacio o espacios.   
        alert("Campo Vacio ingresar nombres");
    }else{
        amigos.push(nombres);   
        console.log(amigos);
        nombres=document.getElementById('amigo').value = "";
    }
};

function sortearAmigo(){
    if (amigos=="") {
        alert("Arreglo vacio");
    }
    else{
        //alert("Existe elementos");
        let totalamigos=amigos.length-1;
        //alert(totalamigos);
        //alert(amigos);
        numeroSecreto=Math.floor(Math.random()*totalamigos)+1;
        alert(numeroSecreto);
        alert(amigos[numeroSecreto]);
        asignarTextoElemento('resultado',`Tu amig@: ${amigos[numeroSecreto]} fue el ganador del sorteo.`);
    }
};

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

asignarTextoElemento('resultado','Por ahora no existe un sorteo');