// Importamos express
const express = require('express');

// Importamos el modulo de response
const response = require('./../../network/response');

// Creamos una instancia de router de express
const router = express.Router();

// Gestion de peticiones GET
router.get('/', function(req, res) {
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
router.post('/', (req, res) => {
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

module.exports = router;
