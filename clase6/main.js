// eventos en el dom

var boton = document.getElementById('boton');
var input = document.getElementById('input');
var limpia = document.getElementById('limpia');
var dobleClick = document.getElementById('dobleClick');
var etiqueta = document.getElementById('etiqueta');
var formulario = document.getElementById('formulario');

// evento onBlur (cuando pierde foco)
boton.addEventListener('blur', function() {
    alert('Hola Blur !!');
});

// evento onChange
input.addEventListener('change', function() {
    console.log(this.value); // se puede usar input.value
});

// evento onClick
limpia.addEventListener('click', function(evento) { //evento es solo para elementos tipo <a></a> 
    evento.preventDefault();
    console.log("Se activó evento onClick");
    input.value = "";
});

// evento double click
dobleClick.addEventListener('dblclick', function() {
    alert('Ouch!');
});

// evento onFocus
etiqueta.addEventListener('focus', function(){
    document.body.style.backgroundColor = "gray"; //es lo mismo que documento.getElementById('body')
});

// keydown
formulario.nombre.addEventListener('keydown',function(){ // se puede acceder con name, por debe ser por el id
    console.log("evento keydown");
});

// evento onKeyPress (se supone que debe apretar cada vez la tecla para que escriba)
formulario.tecla.addEventListener('keypress', function() {
    console.log("evento keypress");
});

// evento keyUp (al momento de soltar la tecla deberia ejecutarse)
formulario.keyUp.addEventListener('keyup', function(){
    console.log("evento keyUp");
});

// Manejo del DOM
//document.getElementById
//document.getElementsByTagName: trae un HTMLCollection con los elementos
//document.querySelector(selector): trae 1 elemento según CSS Selector
//document.querySelectorAll(selector): trae todos los elementos
//target.addEventListener('evento',function(){}); agrega evento al target
// classList: trae coleccion activa de DOMTokenList de los atributos de clase del elemento
// element.classList.add(): agrega clases al elemento, si ya existen se ignoran


// Se ejecuta al inicio
document.addEventListener('DOMContentLoaded', function(){
    var inputs = document.getElementsByTagName('input');
    console.log(inputs);
    console.log("input posicion 2:",inputs[2]); //están ordenado de arriba hacia abajo en la declaracion del html

    // ejemplos:  querySelector
    var titulo = document.querySelector("h1");
    var clase = document.querySelector(".claseBoton"); // con . se llama por class
    var id = document.querySelector("#limpia");     // con # se llama por id
    var anidado = document.querySelector("form input");
    console.log(titulo,clase,id,anidado);

    // ejemplos:  querySelectorAll
    var inputsForm = document.querySelectorAll("form input");
    console.log(inputsForm);

    // ejemplos: classList
    console.log(clase.classList);
    clase.classList.add('segundaClase');
    console.log(clase.classList);

    var primeraClase = document.querySelector('.primeraClase');


});



