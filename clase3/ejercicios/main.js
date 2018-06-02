//ejercicios

var auto = {
    color: 'verde', //siempre va con coma , nomnomnom
    marca: 'Jeep',
    modelo: 'Wrangler',
    tipo: 'FWD',
    motor: {
        cilindrada: '2.0',
        combustible: 'bencina'
    },
    puertas: 4,
    anio: 2018,
    transmision: 'AT',
    permisoCirculacionAlDia: true,
    encendido: false,
    encender: function(valor) {
        if(valor) {
            console.log("El auto está encendiendo");
        } else {
            console.log("El auto se está apagando");
        }
        this.encendido = valor; //es lo mismo que auto.encendido = true;
    },
    frenar: function() {
        return 'El auto frenó';
    }
}

console.log(auto);
console.log(auto.encendido);
auto.encender(true);
console.log(auto.encendido);

/** LocalStorage **/
//es de html5, tambien llamado HTML5 Web Storage
//antes de esto, se usaban las cookies (nomnomnom) pero eran poco seguras

//angular lo usa para pasar un dato de una vista a otra
//en vez de pasar por parametro en la URL, se pasa por LocalStorage

// guardar datos en el navegador
window.localStorage.setItem("titulo","Curso de JavaScript");

// guardar objetos en localstorage
window.localStorage.setItem("Persona", JSON.stringify({nombre:"Luis Vilches"}));

//JSON.stringify -> transforma un objeto json en texto plano

// recuperar objeto
window.localStorage.getItem("titulo");

// sacar objetos del localstorage
JSON.parse(window.localStorage.getItem("Persona")); //es case sensitive

// eliminar un item
window.localStorage.removeItem("titulo");

// eliminar todos los items
window.localStorage.clear();

/** SessionStorage **/
// igual a LocalStorage, pero al cerrar la pestaña o el navegador se borran
// tiene las mismas funciones de LocalStorage, pero se accede así:

window.sessionStorage.setItem("usuario", "pulentaki");