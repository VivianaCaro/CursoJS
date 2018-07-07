// Validación de formulario

// La idea es validar antes de enviar al backend para que el usuario no tenga una mala experiencia
// HTML también tiene validación de formulario, pero es más común trabajarlo en JS

// Normalmente se hace una función validacion() que se ejecuta en el envío del formulario

/*
<form action="url/donde/seenvia/formulario" method="POST|GET|PUT|DELETE" id="
onsubmit=" return validacion()">

function validacion() {
    if(!noMiraPaAdelante) {
        alert('mira pa adelante')
        return false;
    } else if( ...) {

    } 
    alert('tu formulario fue enviado');
    return true;
}

El formulario sólo se va a enviar si la funcion validacion retorna true
*/

// Validacion de campos texto obligatorios
// txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre) [que comience y termine con espacio]

// Validacion de campos numericos
// isNaN(valor) || valor == null || valor.length == 0  [isNan => Is Not A Number]

// Validación de campos de correo electrónico
// valor = document.getElementById("correo").value;
// (buscarla en internet, no la alcancé a copiar) [comience con letra, puntos, guiones "n-veces"+"@"+algo . algo]

// Validación de campos selectores (select)
// indice = document.getElementById("opciones").seletedIndex;
// indice == null || indice == 0    [Ya que el indice 0 se usa para los mensajes "Seleccione algo"]

// Validacion de campos Radio Button
// opciones = document.getElementByName("opciones");
// var seleccionado = false;
// for (  ) {
// if(opciones[i].checked) {
//    seleccionado = true;
//    return true; 

// Validacion de campos checkbox
// elemento = blah
// if( !elemento.checked )

// Validación de teléfono
// telefono = document.document.getElementById("telefono");
//   !(/^\d{9}$/).test(telefono) [9 numeros consecutivos]

// Validación de fechas
/*
var ano = document.getElementById("ano");
var mes = document.getElementById("mes");
var dia = document.getElementsById("dia")

var fecha = new Date(ano, mes, dia);
if( !isNaN(valor)) {
    return false;
}
*/