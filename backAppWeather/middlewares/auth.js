const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // coloco el nombre del header con el que recibire el token 
    const token = req.headers['access-token'];
	
    if (token) {
      // verifica que el token sea valido o no 
      
      jwt.verify(token,process.env.MI_LLAVE, (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Debes logearte primero' 
      });
    }
 };