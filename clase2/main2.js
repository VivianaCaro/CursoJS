// obtiene elementos desde el dom

// input
var input = document.getElementById('box');
// lista
var lista = document.getElementById('lista');
// boton
var boton = document.getElementById('agregar');
// crea array para almacenar tareas
var tareas = []; //vacío //new Array(); (practica de POO )

function agregarTarea(tarea){
    tareas.push(tarea);
    renderList();
}

/* forEach
 var miArray =[1,2,3,4];
 miArray.forEach(function (elemento, index){ //puede no ir index
    console.log("El valor de la posicion:", index, " es: ", elemento);
 });
 posicion 0 es : 1
 posicion 1 es: 2
 */

function renderList(){ // buscar en español "generaLista"
    lista.innerHTML = ''; // todo lo que contiene dentro de la etiqueta HTML
    tareas.forEach(function(item, i){
        // creamos la etiqueta <li> con un metodo de JS
        let li = document.createElement('li');
        // asignamos un valor 
        li.innerHTML = item;
        // insertamos la etiqueta en el DOM, similar a append de jquery
        lista.appendChild(li);
    })
}

// ver cosas de event loop (crea un listado de operaciones)
boton.addEventListener('click', function(){
    agregarTarea(input.value);
})
