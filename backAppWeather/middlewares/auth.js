const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers['access-token'];
	
    if (token) {
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