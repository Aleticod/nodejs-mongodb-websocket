// Importamos express
const express = require('express');
// import express from 'express; ES6

// Importamos body-parser
const bodyParser = require('body-parser');

// Importamos router de message
const router = require('./network/routes');

// Iniciamos una instancia de express
var app = express();
// Hacemos uso de body-parser
app.use(bodyParser.json()); // Para cuerpos que contienen json
app.use(bodyParser.urlencoded({extended: true})); // Para url encoded
// Hacemos uso del router
//app.use(router);

// Enviamos nuestro servidor app a las rutas para que cree todas las rutas
router(app);

// Creamos una ruta para que express haga uso y nos devuelva algo
// app.use('/', function(req, res) {
//     res.send('Hola');
// })

// Servir estaticos con express
app.use('/app', express.static('public'))

// Levantamos un puerto de escucha para express
app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');