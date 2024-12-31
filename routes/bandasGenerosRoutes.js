var express = require('express');
var router = express.Router();

const generosController = require('../controller/bandasGenerosController')

// Forma 1

// const bandasController = require('../controller/bandasControllers')

// Forma 2 (REACTIVAR)

// const {listadoBandas} = require('../controller/bandasControllers')
// router.get('/',listadoBandas);

/* PRUEBAS */

router.get('/:genero', generosController.porGenero); // Esto es /id/:genero
router.get('/', generosController.index);

module.exports = router 