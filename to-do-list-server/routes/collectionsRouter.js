var express = require('express');
var router = express.Router();

const controller = require('../controllers/collections.controller');

/* GET users listing. */
router.post('/', controller.addCollection);

module.exports = router;
