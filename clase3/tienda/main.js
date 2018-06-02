// valdar el LocalStorage
validarStorage();

// llamar a los inputs que están en el DOM

var boton = document.getElementById('agregar');
var nombre = document.getElementById('nombre');
var desc = document.getElementById('desc');
var img = document.getElementById('img');
// var precio = document.getElementById('precio');

// tip: para no tener que poner .value al final de todos los parametros

var precio = document.getElementById('precio');

// creamos el evento del boton

boton.addEventListener('click', function() {
    nuevoProducto(nombre.value, desc.value, img.value, precio.value /*ver tip*/);
    alert('El nuevo producto ' + nombre.value + ' se ha creado con éxito');
    nombre.value = '';
    desc.value = '';
    img.value = '';
    precio.value = ''; // ver tip !!

})