var express = require('express');
var router = express.Router();

const controller = require('../controllers/tasks.controller');

/* GET users listing. */
router.post('/', controller.addTask);
router.get('/', controller.getTasks);
router.put('/:id', controller.editTask);
router.delete('/:id', controller.deleteTask);

module.exports = router;
