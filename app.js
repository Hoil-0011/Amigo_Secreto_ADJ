// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres
let amigos = [];
let numeroSecreto="";
let totalamigos;

function agregarAmigo() {

    let nombres = document.getElementById('amigo').value.trim(); //trim elimina los espacios---con esto se elimina los espacios que se puedan tener al ingresar las cadenas de texto

    if (nombres =="" || nombres ==" ") { //se evalua si esta ingresando un valor vacio o espacios.
        //ahora que lo pienso, no es necesario evaluar los espacios, ya que en teoria el trim de la linea anterior, evita que exista.   
        alert("Por favor, inserte un nombre.");
    }else{
        amigos.push(nombres);   
        console.log(amigos);
        nombres=document.getElementById('amigo').value =""; //limpio el campo.

        totalamigos=amigos.length-1;
        listaDeAmigos();
        alert("Después de llamar a listaDeAmigos()");
    }
};

function listaDeAmigos(){
    alert(totalamigos);
    let lista=document.getElementById("listaAmigos");
    //let html = ""; // Variable acumuladora para evitar múltiples manipulaciones del DOM

    for (let i = 0; i <= totalamigos; i++) {
        //alert(amigos[i]);
        html += `<li>${amigos[i]}</li>`;
    }
    alert("despues del for");
    lista.innerHTML = html; // Actualizamos el DOM una sola vez al final
};

function sortearAmigo(){
    if (amigos=="") {
        alert("Arreglo vacio");
    }
    else{
        //alert("Existe elementos");
        
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
};

asignarTextoElemento('resultado','Por ahora no existe un sorteo');