// aqui van las rutas o urls de los servicios
const express = require('express');
const router = express.Router();
const ctrlHome = require('../controladores/main');

router.get('/', ctrlHome.home);
router.post('/crear', ctrlHome.guardar);
router.get('/listar', ctrlHome.listar);
router.get('/listar/:id', ctrlHome.listarPorId);
router.get('/listarUno/:nombre', ctrlHome.encontrarPorNombre);
router.delete('/eliminar/:id', ctrlHome.eliminarPorId);

module.exports = router;