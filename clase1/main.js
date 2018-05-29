//Crear variable undefined, numerica y string
var numerica = 1;
var str = "soy string";
var boolean = true;
var indefinida;


//imprime por consola
console.log("----Imprimiendo por consola distintos tipos de variable ----");
console.log("Variable numerica", numerica);
console.log("Variable string", str);
console.log("Variable booleana", boolean);
console.log("Variable indefinida", indefinida);


//dos variables numericas con diferente valor y operen numericamente en consola

var a = 100;
var b = 10;

console.log("----Operaciones aritmeticas ----");
console.log("primer numero",a, "segundo numero",b);
console.log("suma",a+b);
console.log("resta",a-b);
console.log("multiplicacion",a*b);
console.log("division",a/b);

//incrementos

console.log("----Incrementos ++ y decrementos --");
var num = 1;
console.log("numero inicial",num);
var iterador = num++;
console.log("incremento",iterador); //debería dar 2, no asigna 

console.log("---- Operador 'typeof' ----");
//operador typeof permite conocer el tipo de variable sobre la que está operando
console.log(typeof numerica);
console.log(typeof str);
console.log(typeof boolean);
console.log(typeof indefinida);

//operadores booleanos (negacion (!X), 
//identidad : igualdad debil (==), igualdad estricta === (identico)  )
console.log("---- Operadores booleanos ----");
console.log("!true -> false", !true);
console.log("!false -> true", !false);
console.log("!!true -> true", !!true);

//crear dos variables booleanas, operadores estrictos
var verdadero = true;
var falso = false;

console.log(verdadero === falso); //false
console.log(verdadero !== falso); //true
console.log(verdadero !== verdadero); //false
console.log(falso === falso); //true

//operadores de comparación <,>, <=, >=
//se puede operar con numeros 
//y strings (no recomendable porque no es un valor lógico, pero compara por el "orden")
console.log("---- Operadores logicos ----");

var num1 = 10;
var num2 = 20;

console.log("---- AND ----");
console.log(num1 < num2); //true
console.log(num1 > num2); //false
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true
console.log(num1 < num1); //false

/*operadores logicos
    AND (&&)
true && true // true
true && false //false
false && true //false
false && false //false
*/
console.log(num1 < num2 && num2 > num1); //true
console.log(num1 < num2 && num2 >= num1); //true
console.log(num1 > num2 && num2 > num1); //false
console.log(num1 < num2 && num2 < num1); //false

//operador OR (||)
console.log("---- OR ----");
console.log(num1 < num2 || num2 > num1); //true
console.log(num1 < num2 || num2 >= num1); //true
console.log(num1 > num2 || num2 > num1); //true
console.log(num1 > num2 || num2 < num1); //false

//asignación condicional
console.log("---- Asignación condicional ----");
//condicion ? valor_si_true : valor_si_false

console.log(num1 < num2 ? 'si, es verdadero' : 'no, es false');
console.log(num1 > num2 ? 'si, es verdadero' : 'no, es false');

//Sentencia if
//if simple
console.log("---- Sentencia if ----");
if(num1 < num2 || num1 > num2) {
    console.log("se ejecuta");
}

//if/else
// usar llaves por buenas prácticas! 
console.log("---- Sentencia if/else ----");
if(num1 < num2 || num1 > num2) {
    console.log("Se ejecuta");
} else {
    console.log("No se ejecuta");
}

//  if/else if
console.log("---- Sentencia if/else if----");
if(num1 < num2 && num1 > num2) {
    console.log("Entre en if");
} else if(num1 < num2 || num1 > num2) {
    console.log("Entre en primer else-if");
} else {
    console.log("Entre en else final");
}

// switch (puede sustituir el if - else if - else)
/*
switch(condicion) {
    case condicion_1:
        bloque_1 
        break;
    case condicion_2:
        bloque_2
        break;
    default: (equivale a else final)
        bloque_3 
}
*/
console.log("---- Sentencia switch ----");
num1 = 30;
function rango(numero) {
    if(numero <= 5) {
        return 0;
    } else if(numero >= 6 && numero <= 10) {
        return 1;
    }
}
switch(rango(7)) {
    case 0:
        console.log("Está en el primer rango [-infinito, 5]"); 
        break;
    case 1:
    console.log("Está en el segundo rango [6, 10]"); 
        break;
    case 30:
        console.log("Es igual a 30");
        break;
    default:
        console.log("Es otro valor");
}

var nombre = "Taki";

switch(nombre) {
    case 'Tetera' : console.log("Es Tetera");
        break;
    case 'Varossa' : console.log("Es Varossa");
        break;
    case 'Taki' : console.log("Es Taki !");
        break;
    default:
        console.log("Es otro nombre");
}


//Funciones
console.log("---- Funciones ----");
/*
function nombre (parametroA, parametroB, parametroC) {
    //bloque de codigo
}
*/

//la => representa la palabra clave "function"
//soportado por varios browser menos menor IE8 
//EMAC Script 5
/*
var nombre = () => {
    bloque
}
*/

//JS es un lenguaje caseSensitive!
//se recomienda utilizar camelCase !!
function nombreCompleto (nombre, apellido) {
    console.log(nombre + " " + apellido);
}

nombreCompleto("Aquiles", "Baeza"); //no me aguante, pero me contuve

function edad(anioNacimiento) {
    return 2018 - anioNacimiento;
}

console.log(edad(1988)); //no estamos considerando el mes ni día ya que es sólo un ejemplo práctico

function esMayorDeEdad(anioNacimiento) {
    if(edad(anioNacimiento) >= 18) {
        console.log("Es mayor de edad");
    } else {
        console.log("Es menor de edad"); //ALO, PDI
    }
}

esMayorDeEdad("1990"); //de alguna forma esto funciona, pero no debería usarse
esMayorDeEdad(2000);
esMayorDeEdad(2001);

//otra forma más reducida
if(edad(1990) >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}