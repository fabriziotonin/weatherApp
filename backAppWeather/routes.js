const express = require('express');
const router = express.Router();
const auth = require('./middlewares/auth');
const loginController = require('./controllers/loginController');
const datosController = require('./controllers/datosController');
const { check } = require('express-validator');



router.post('/login/',[
  check('usuario','El nombre es obligatorio.').not().isEmpty(),
  check('password','El password es obligatorio.').not().isEmpty(),
], loginController.login)

router.get('/clima', auth , datosController.datos);


module.exports = router;
