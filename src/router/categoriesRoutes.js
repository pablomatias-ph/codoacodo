const express = require("express");
const router = express();

router.get('/categories', (req, res) => {console.log('Ruta para categorias')});
router.get('/categories/:categorie', (req, res) => {console.log('Ruta para categoria')});


module.exports = router;