// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres
let amigos = [];

function agregarAmigo() {

    const nombres = document.getElementById('amigo').value.trim(); //defino como constante los nombres, porque en teoria no cambian.
    //.trim() quita los espacios al inicio y final del texto.

    if (nombres =="" || nombres == " ") { //se evalua si esta ingresando un valor vacio o espacios.   
        alert("Campo Vacio ingresar nombres");
    }else{
        amigos.push(nombres);   
        console.log(amigos);
    }
   
}

