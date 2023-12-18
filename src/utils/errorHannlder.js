const path = require('path');

/* Respuesta al error 404 */
module.exports = {
  notFound: (req, res) => {
    res.status(404).sendFile(path.join(__dirname,"../../public/pages/404.html"));
  },
};