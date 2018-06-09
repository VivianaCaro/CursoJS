// Metodos (en base a prototipos), no hay clases, por lo que hay que crear el constructor

// en JS no existe el tema de publico o privado ... se pueden crear, pero no es obligatorio

// Constructor
function Comida(nombre, tipo, costo, procedencia) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.costo = costo;
    this.procedencia = procedencia;

    // si se escribe un metodo dentro del constructor, 
    // pero seria un metodo privado y solo se podría acceder desde el constructor o rl objeto creado
}

Comida.prototype.getNombre = function () {
    return this.nombre;
}

Comida.prototype.descuento = function(desc) {
    var montoDsc = this.costo * desc / 100;
    return this.costo - montoDsc;

}
// para utilizarlo hay que crear un objeto

var Porotos = new Comida("Porotos con riendas", "legumbre", 2000, "Chilena"); // segun el menú de Lavin

console.log(Porotos.nombre, Porotos.getNombre());
console.log(Porotos.descuento(20));

// prototipo de forEach

var array = [1,2,3,4];

Array.prototype.iterar = function (cb) {
    console.log(this);
    for(var i=0; i <= this.length; i++) {
        cb(this[i],i); //callback: funciones dentro de funciones
    }
}

array.iterar(function(item, index){
    console.log("item ->", item, index);
});

