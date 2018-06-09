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
    agregar(nombre.value, desc.value, img.value, precio.value /*ver tip*/);
    alert('El nuevo producto ' + nombre.value + ' se ha creado con éxito');
    nombre.value = '';
    desc.value = '';
    img.value = '';
    precio.value = ''; // ver tip !!

})


function agregar(nombre, descripcion, img, precio) {
    // var producto = new Producto("Gloomhaven", "El bebé", "https://images-na.ssl-images-amazon.com/images/I/51ulRXlJ7LL._SX425_.jpg", 130000);
    var producto = new Producto(nombre, descripcion, img, precio);
    producto.guardar();
}