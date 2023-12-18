const express = require("express");
const router = express.Router();
const itemsController = require('../controllers/itemController.js');

router.get('/items', itemsController.getItems);
router.get('/items/:id', itemsController.getItem);
router.post('/items/create', itemsController.createItem);
router.put('/items/:item', (req, res) => {res.send('Ruta para modificar items')});
router.delete('/items/:item', (req, res) => {res.send('Ruta para borrar items')});

module.exports = router;