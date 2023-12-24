const path = require('path');

/* Respuesta al error 404 */
module.exports = {
  notFound: (req, res) => {
    res.status(404).render("404", {view: {title: "Contenido no encontrado : Funkoshop",},})
  }}