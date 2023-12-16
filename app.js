const express = require("express");
const app = express();
const PORT = 3001;
const itemsRoutes = require('./src/routes/itemsRoutes.js')
const categoriesRoutes = require('./src/routes/categoriesRoutes.js')

/* Carpeta estatica */
app.use(express.static('public'));

/* Parseo los datos */
app.use(express.urlencoded());
app.use(express.json());

/* Rutas */
app.use('/', itemsRoutes);
app.use('/', categoriesRoutes);

/* Inicia el servidor */
app.listen(PORT, () => console.log(`Server corriendo en ${PORT}`));