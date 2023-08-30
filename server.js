const express = require('express');
// import express from 'express; ES6

// Definimos un router de express para gestionar peticiones
const router = express.Router();

// Iniciamos una instancia de express
var app = express();

// Hacemos uso del router
app.use(router);

// Gestion de peticiones GET
router.get('/message', function(req, res) {
    res.send('Hola, te devuelvo la lista de mensajes con GET');
})

// Gestion de peticiones POST
router.post('/message', (req, res) => {
    res.send('Hola, mensaje anadido con POST');
})

// Creamos una ruta para que express haga uso y nos devuelva algo
// app.use('/', function(req, res) {
//     res.send('Hola');
// })

// Levantamos un puerto de escucha para express
app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');