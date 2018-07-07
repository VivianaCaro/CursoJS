// Ejercicios

document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("formulario");
    var dia = formulario.dia;
    var mes = formulario.mes;
    var anio = formulario.anio;

    for(var i=1; i <= 31; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        dia.appendChild(option);
    }

    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                "Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for(var i=1; i <= meses.length; i++) {
        var opMes = document.createElement('option');
        opMes.value = i;
        opMes.innerText = meses[i-1];
        mes.appendChild(opMes);
    }

    for(var i=1970; i <= 2018; i++) {
        var opAnio = document.createElement('option');
        opAnio.value = i;
        opAnio.innerText = i;
        anio.appendChild(opAnio);
    }
})

// Validando el formulario
function validacion() {
    var formulario = document.getElementById("formulario");
    if(formulario.nombre.value == null || formulario.nombre.value.length == 0 || /^\s+$/.test(formulario.nombre.value) ){
        alert('Complete el campo nombre');
        return false;
    } 
    if(formulario.edad.value == null || isNaN(formulario.edad.value) || formulario.edad.value < 0){
        alert("Ingresa una edad válida [Mayor o igual a 0]");
        return false;
    } 
    if(formulario.email.value == null || formulario.email.value.length == 0 
                || !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(formulario.email.value))) {
        alert('Complete el campo email con un formato válido');
        console.log("formulario.correo.value", formulario.email.value);
        return false;
    }

    var radios = formulario.querySelectorAll('input[type=radio]');
    var seleccionado = false;

    for(var i=0; i<radios.length; i++) {
        if(radios[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if(!seleccionado) {
        alert("Debes seleccionar al menos una opción");
        return false;
    }

    if(formulario.telefono.value == null || formulario.telefono.value.length == 0 || !(/^\d{9}/.test(formulario.telefono.value))) {
        alert("Debes ingresar un teléfono de 9 dígitos");
        return false;
    }

    if(formulario.comuna.selectedIndex <= 0) {
        alert("Debes seleccionar una comuna");
        return false;
    }

    if(!formulario.terminos.checked) {
        alert("Debes aceptar los términos");
        return false;
    }
    alert('Los datos han sido enviados')
    return true;
}