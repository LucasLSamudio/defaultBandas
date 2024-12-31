var express = require('express');
var router = express.Router();

const bandasIndexController = require('../controller/bandasIndexController')

router.get('/', bandasIndexController.index);

module.exports = router;