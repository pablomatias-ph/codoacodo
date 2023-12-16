const express = require("express");
const router = express();

router.get('/items', (req, res) => {res.send('Ruta para items')});
router.get('/items/:item', (req, res) => {res.send('Ruta para item')});
router.post('/items/create', (req, res) => {res.send('Ruta para crear items')});
router.put('/items/:item', (req, res) => {res.send('Ruta para modificar items')});
router.delete('/items/:item', (req, res) => {res.send('Ruta para borrar items')});

module.exports = router;