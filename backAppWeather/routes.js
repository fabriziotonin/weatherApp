const express = require('express');
const router = express.Router();
const auth = require('./middlewares/auth');
const loginController = require('./controllers/loginController');
const datosController = require('./controllers/datosController');




router.post('/login/', loginController.login)

router.get('/clima', auth , datosController.datos);


module.exports = router;
