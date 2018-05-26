var dato = "global";

function local(){
    var dato = "local";
    //si se borra "var", se le cambia el valor a la variable Global
    //dato = "local";
    return dato;
}

console.log(dato);
//console.log(local); //devuelve la función como texto, no la ejecuta!!
console.log(local());
console.log(dato); //global, no cambia el valor (ver comentario dentro de funcion)