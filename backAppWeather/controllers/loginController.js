const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
// usuarios harcodeados para evitar usar un server 
const users = [{
  usuario: "fabrizio",
  password: "pass12345"
},{
  usuario: "marco",
  password: "pass0987"
},{
  usuario: "maria",
  password: "pass12345"
}]
exports.login = (req, res) => {

  // busco un usuario en mi array con mongoose seria igual a findOne 
  let exist = users.find((item)=>{
    if(req.body.usuario == item.usuario && req.body.password == item.password){
      return item.usuario == req.body.usuario
    }
  })
  console.log(exist)
  // creo la isntancia con la firma de jwt para crear el token con el usuario encontrado 
  if(exist) {
    const payload = {
      check:  true
    };
     // Firma del token con la clase secreta que esta en el .env 
    const token = jwt.sign(payload,process.env.MI_LLAVE, {
      expiresIn: "180d"
    });
  res.json({
    mensaje: 'Logeado Correctamente',
    token: token,
    usuario: exist.usuario
  });
  } else {
      // traigo los errores del control de rutas y lo mando en el error 
  const errores = validationResult(req);
    return json({ errors: errores.array() });
  }
}
