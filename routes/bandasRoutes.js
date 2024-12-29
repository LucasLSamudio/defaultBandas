var express = require('express');
var router = express.Router();

const bandasController = require('../controller/bandasControllers')

// Forma 1

// const bandasController = require('../controller/bandasControllers')

// Forma 2 (REACTIVAR)

// const {listadoBandas} = require('../controller/bandasControllers')
// router.get('/',listadoBandas);

/* PRUEBAS */

router.get('/', bandasController.index);
router.get('/genero/:genero', bandasController.porGenero);
router.get('/:id', bandasController.porId);

module.exports = router 