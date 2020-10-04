const express = require('express');
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
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true})); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
    res.json({ message: 'Home' });
});

// Iniciar la App
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});

app.use('/api', require('./routes'));

