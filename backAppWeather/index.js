const express = require('express');
// traigo la info de .env 
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

//Crear el servidor
const app = express();

// Puerto de la App
const PORT = process.env.PORT || 4000;

// app.set('llave', process.env.MI_LLAVE);
// ========MiddleWeares =======
app.use(cors());
app.use(express.json()); // parseo de la info application/json
app.use(express.urlencoded({ extended: true })); //para parseo de la aplicacion/x-www-form-urlencoded


// Iniciar la App
app.get('/', function (req, res) {
    res.json({ message: 'Home' });
});
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});

app.use('/api', require('./routes'));

