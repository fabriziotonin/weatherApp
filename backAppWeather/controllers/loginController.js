const jwt = require('jsonwebtoken');
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
  let exist = users.find((item)=>{
      return (item.usuario || item.password) == (req.body.usuario || req.body.password)
  })
  console.log(exist)
  if(exist) {
    const payload = {
      check:  true
    };
    const token = jwt.sign(payload,process.env.MI_LLAVE, {
      expiresIn: "180d"
    });
  res.json({
    mensaje: 'Logeado Correctamente',
    token: token,
    usuario: exist.usuario
  });
  } else {
      res.json({ mensaje: "Usuario o contraseña incorrectos"})
  }
}
