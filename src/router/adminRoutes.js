const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadFiles = require('../middlewares/uploadFiles');
const { isLogged } = require('../middlewares/login');

const controllers = require('../controllers/adminControllers');

// router.use(isLogged);

router.get('/', isLogged, controllers.adminView);
router.get('/create', isLogged,  controllers.createView);
router.post('/create', isLogged,  uploadFiles.array('images', 2), controllers.createItem);
router.post('/create/bulk', isLogged,  controllers.bulkCreate);
router.get('/edit/:id', isLogged,  controllers.editView);
router.put('/edit/:id', isLogged, uploadFiles.array('images', 2), controllers.editItem);
router.delete('/delete/:id', isLogged,  controllers.deleteItem);

module.exports = router;