const express = require("express");
const app = express();
const { notFound } = require('./src/utils/errorHannlder');
require('dotenv').config();

/* Puerto */ 
const PORT = process.env.PORT;

/* Importa las rutas */
const itemsRoutes = require('./src/routes/itemsRoutes.js')
const categoriesRoutes = require('./src/routes/categoriesRoutes.js')


/* Carpeta estatica */
app.use(express.static('public'));

/* Parseo los datos */
app.use(express.urlencoded());
app.use(express.json());

/* Respuesta al error */
// app.use(notFound);

/* Middleware rutas */
app.use('/', itemsRoutes);
app.use('/', categoriesRoutes);

/* Inicia el servidor */
app.listen(PORT, () => console.log(`Server corriendo en ${PORT}`));