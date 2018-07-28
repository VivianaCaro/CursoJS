const Persona = require('../modelos/personas');

exports.home = function(req,res) {
    res.json({
        mensaje : 'Ruta raiz'
    })
}

exports.guardar = (req, res) => {
    var persona = new Persona({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        direccion: {
            calle: req.body.calle,
            numero: req.body.numero
        },
        contacto:{
            telefono: req.body.telefono,
            celular: req.body.celular,
            correo: req.body.correo
        }
    });

    // metodo save heredado de Schema
    persona.save((error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    });
}

exports.listar = (req, res) => {
    Persona.find((error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    })
}

exports.listarPorId = (req, res) => {
    var id = req.params.id;
    Persona.findById({_id:id}, (error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    });
}

exports.encontrarPorNombre = (req, res) => {
    Persona.findOne({nombre: req.params.nombre}, (error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    });
}

exports.eliminarPorId = (req, res) => {
    Persona.remove({_id: req.params.id}, (error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    });
}