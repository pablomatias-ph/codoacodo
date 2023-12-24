const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { initSession } = require('./src/utils/sessions');
require('dotenv').config();


/* Importa las rutas */
const mainRoutes = require('./src/router/mainRoutes');
const shopRoutes = require('./src/router/shopRoutes');
const adminRoutes = require('./src/router/adminRoutes');
const authRoutes = require('./src/router/authRoutes');
const { notFound } = require('./src/utils/errorHandlers');

/* Puerto */ 
const PORT = process.env.PORT;

/* Templates EJS */
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, "./src/views"));

/* Sesion de usuario */
app.use(initSession());

/* User logueado */
app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    next();
  });

/* Parseo los datos */
app.use(express.urlencoded());
app.use(express.json());

/* Motodo OverRride para PUT y DELETE */
app.use(methodOverride('_method'));

/* Middleware rutas */
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

/* Carpeta estatica */
app.use(express.static(path.resolve(__dirname, "public")));

/* Respuesta al error */
app.use(notFound);

/* Inicia el servidor */
app.listen(PORT, () => console.log(`Server corriendo en ${PORT}`))