// Importamos express
const express = require('express');

// Importamos el modulo de response
const response = require('./../../network/response');

// Importamos el controlador de message
const controller = require('./controller');

// Creamos una instancia de router de express
const router = express.Router();

// Gestion de peticiones GET
router.get('/', function(req, res) {
    const filterMessage = req.query.user || null;
    // El usuario solicita la lista de mensajes
    controller.getMessages(filterMessage)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Problema en la base de datos', 500, e);
        })
})

// Gestion de peticiones POST
router.post('/', (req, res) => {
    // El usuario y el message vendran desde el body de la peticion
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch((e) => {
            response.error(req, res, 'Informacion invalida', 400, e)
        });
    //res.send('Hola, mensaje ' + req.body.text + ' anadido con POST'); // Aqui se envia el body al cliente
    // res.status(201).send({ error: "", message: "Esto es un mensaje con POST"}); // Aqui se envia el body al cliente
})

router.patch('/:id', function (req, res) {
    console.log(req.params.id);
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 201)
        })
        .catch((e) => {
            response.error(req, res, 'Error interno', 500, e);
        });
    //res.send('ok');
})

module.exports = router;
