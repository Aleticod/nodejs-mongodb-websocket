// Importamos express
const express = require('express');
// import express from 'express; ES6

// Importamos el modulo de repuestas
const response = require('./network/response');

// Importamos body-parser
const bodyParser = require('body-parser');

// Definimos un router de express para gestionar peticiones
const router = express.Router();

// Iniciamos una instancia de express
var app = express();
// Hacemos uso de body-parser
app.use(bodyParser.json()); // Para cuerpos que contienen json
app.use(bodyParser.urlencoded({extended: true})); // Para url encoded
// Hacemos uso del router
app.use(router);


// Gestion de peticiones GET
router.get('/message', function(req, res) {
    // Lectura de la cabecera de request
    console.log(req.headers);
    // Generar una header personalizado de response
    res.header({
        "Custon-Header": "Nuestro valor personalizado"
    });
    response.success(req, res, 'Lista de nombres');
    // res.send('Hola, te devuelvo la lista de mensajes con GET');
})

// Gestion de peticiones POST
router.post('/message', (req, res) => {
    console.log(req.body); // Impresion del body de request
    console.log(req.query); // Impresion del query de request
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error inesperado', 500, 'Es oslo una simulacion de los errores' );
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
    //res.send('Hola, mensaje ' + req.body.text + ' anadido con POST'); // Aqui se envia el body al cliente
    // res.status(201).send({ error: "", message: "Esto es un mensaje con POST"}); // Aqui se envia el body al cliente
})

// Creamos una ruta para que express haga uso y nos devuelva algo
// app.use('/', function(req, res) {
//     res.send('Hola');
// })

// Servir estaticos con express
app.use('/app', express.static('public'))

// Levantamos un puerto de escucha para express
app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');