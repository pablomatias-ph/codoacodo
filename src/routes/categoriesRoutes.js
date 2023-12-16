const express = require("express");
const router = express();

router.get('/categories', (req, res) => {console.log('Ruta para categorias')});
router.get('/categories/:item', (req, res) => {console.log('Ruta para categoria')});
router.post('/categories/create', (req, res) => {console.log('Ruta para crear categorias')});
router.put('/categories/:categorie', (req, res) => {console.log('Ruta para modificar categorias')});
router.delete('/categories/:item', (req, res) => {console.log('Ruta para borrar categorias')});

module.exports = router;