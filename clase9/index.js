// se debe instalar antes: npm y npm install --save express

// importamos el modulo de Express
const express = require('express');
// creamos una instancia de Express 
const app = express();

// parseo de body y files (instaciado -> ())
const body = require('connect-multiparty')();


// get, post, put, delete
// con / accedemos al dominio principal (localhost:5000)
app.get('/', (request, response) => {  // o function (req,res)
    response.status(200).send("Hola mundo desde Node con Express");

    // terminamos el proceso de ejecución del servidor para evitar que quede escuchando
    response.end();
});

// con / accedemos al dominio (localhost:5000/hola)
app.get('/hola', (request, response) => {  // o function (req,res)
    response.status(200).send("Hola mundoo");

    // terminamos el proceso de ejecución del servidor para evitar que quede escuchando
    response.end();
});

// vamos a crear servicios estaticos
var arreglo = [
    {
        id: 1,
        nombre: "Chuck",
        apellido: "Norris",
        age: 66
    },
    {
        id: 2,
        nombre: "Optimus",
        apellido: "Prime",
        age: 130
    },
    {
        id: 3,
        nombre: "Ant-onio",
        apellido: "Banderas",
        age: 10
    },
    {
        id: 4,
        nombre: "Aldel",
        apellido: "Dazeem",
        age: 50
    }
];

app.get('/api', (req,res) => {
    res.status(200).json(arreglo);
});

// si creas una url con /api/encontrar/amigos/:algo ... ese "amigos" se lo comerá esta ruta de api, ojo 
app.get('/api/encontrar/:id', (req,res) => {
    var id = req.params.id;

    // funcion .find es de ECS6 
    var data = arreglo.find(elemento => {
        if(elemento.id == id) {
            return elemento;
        }
    });

    res.status(200).json(data);
});

app.post('/api/guardar', body, (req,res) => {
    var data = {
        id: arreglo.length + 1, // debería generarse solo, pero como no estamos con base de datos, meh
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        age: req.body.age
    };

    arreglo.push(data);

    res.status(200).json({
        mensaje: "Operación exitosa!"
    });
});

app.delete('/api/eliminar/:id', (req,res) => {
    var id = req.params.id;
    
    arreglo.find((elemento, indice) => {
        if(elemento.id == id) {
            return arreglo.splice(indice, 1);
        }
    });

    res.status(200).json({
        mensaje: "Elemento eliminado existosamente!"
    })
});

app.put('/api/actualizar/:id', body, (req,res) => {
    var id = req.params.id;

    var data = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        age: req.body.age
    }

    arreglo.find((e,i) => {
        if(e.id == id) {
            data.id = e.id;
            return arreglo.splice(i, 1, data);
        }
    })
})

// creamos nuestro servidor de Node y Express
app.listen(5000, error => {
    // validamos si existe algún error
    if(error) {
        console.log(error);
    } else {
        console.log("Servidor corriendo en el puerto 5000");
    }
});