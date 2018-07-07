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