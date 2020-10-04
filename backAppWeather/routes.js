const express = require('express');
const router = express.Router();
const auth = require('./middlewares/auth');
const loginController = require('./controllers/loginController');
const datosController = require('./controllers/datosController');
const { check } = require('express-validator');


// creo la ruta post para hacer el loginController, recibe en 2do parametro los expressvalidator y como 3er parametro los controles(la logica) 
router.post('/login/',[
  check('usuario','El nombre es obligatorio.').not().isEmpty(),
  check('password','El password es obligatorio.').not().isEmpty(),
], loginController.login)

// en el segundo parametro le paso la logica de jwt para autentificar y el 3ero es el control y la devolucion de los datos 
router.get('/clima', auth , datosController.datos);


module.exports = router;
