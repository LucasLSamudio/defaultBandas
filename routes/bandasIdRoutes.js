var express = require('express');
var router = express.Router();

const bandasIdController = require('../controller/bandasIdController')

// Forma 1

// const bandasIdController = require('../controller/bandasIdControllers')

// Forma 2 (REACTIVAR)

// const {listadoBandas} = require('../controller/bandasIdControllers')
// router.get('/',listadoBandas);

/* PRUEBAS */

router.get('/:id', bandasIdController.porId); // Esto es /id/:id | Esto es /id/:genero
router.get('/', bandasIdController.index);

module.exports = router 