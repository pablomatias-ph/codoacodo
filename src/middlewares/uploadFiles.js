const { log } = require('console');
const multer =  require('multer');
const path = require('path');

/* Guardar imagenes en Servidor */

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb (null, path.resolve(__dirname, '../../public/imgs')),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const uploadFiles = multer({storage});

module.exports = uploadFiles;