const express = require('express');
// import express from 'express; ES6

// Iniciamos una instancia de express
var app = express();

// Creamos una ruta para que express haga uso y nos devuelva algo
app.use('/', function(req, res) {
    res.send('Hola');
})

// Levantamos un puerto de escucha para express
app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');