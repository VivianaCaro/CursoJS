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

// this en JS, se refiere al contexto
/*
button.addEventListener('click', function(){
    this.innerText = "nuevo valor"; //this se refiere a button
})
*/

/*
//arreglos array : coleccion de datos

//Creacion literal (separado por comas)
var miArray = [1,2,3,4]; //array de numeros
var miArray = ["Ola", "ke", "ase"]; //array de strings
var miArray = [{propiedad: "valor1"}, {propiedad: "valor2"}]; //array de objetos
var miArray = [[2,4],[3,6]]; //array de array (matriz)
var miArray = [1, true, [3,2], "Hola", {clave:"valor"}]; //array mixto

//nueva instancia de la clase Array
var miArray = new Array();

var miArray = ["uno", "dos", "tres"];
miArray[1]; //devuelve: "dos"

//si accedemos a una posición que no existe
miArray[8]; //undefined !!

*/

//Ejercicios

var miArray = [1,2,3,4];
console.log("Mi elemento es:", miArray[2]); //"3"
console.log("Mi array tiene ",miArray.length," elementos.");

/* metodos de array
//.sort(); : de menor a mayor
miArray.sort();

//pop: devuelve el ultimo elemento del arreglo y lo elimina 
miArray.pop();

//push: agregar elementos y devuelve la nueva longitud del arreglo
miArray.push(2);

//reverse: inverte el arreglo
miArray.reverse();
*/
/* ejemplo/ejercicio
console.log("valor anterior", miArray);
miArray.push(5);
console.log("valor actual", miArray);
*/

function agregar(numero){
    miArray.push(numero);
}

console.log(miArray);
agregar(8);
console.log(miArray);

//join
var template = [1,2,3];
console.log(template); //123

//objetos literales
var libro = {
    autor: "Anonimo",
    paginas: 64,
    formatos : [],
    precio: 12000,
    publicado: true,
    leer: function () {
        console.log("He leido el libro");
    }
}

libro.autor; //Anonimo
libro.precio = 8000;
libro['publicado']; //true
libro.leer(); //devuelve: "he leido el libro"

// crear objetos
var miObjeto = {propiedad: "valor", metodo: function(){} };
var miObjeto = new Object({propiedad: "valor", metodo: function(){} });

// anidacion
var libro = {
    autor: {
        nombre: "blah",
        nacionalidad: "chilena",
        contacto: {
            email: "asda@asdasd.com",
            twitter: "@asdasda"
        }
    },
    editorial: {
        nombre: "ed Books",
        web: "http://edbooks.cl"
    }
}

//acceder
var email = libro.contacto.email;