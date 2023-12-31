// Importamos express
const express = require('express');
const multer = require('multer');

// Importamos el modulo de response
const response = require('./../../network/response');

// Importamos el controlador de message
const controller = require('./controller');

// Creamos una instancia de router de express
const router = express.Router();

// Uso de multer, para almacenar el archivo
const upload = multer({
    dest: 'public/files/',
});

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
router.post('/', upload.single('file'), (req, res) => {
    console.log(req.file);
    // El usuario y el message vendran desde el body de la peticion
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
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

router.delete('/:id', function(req, res) {
    controller.deleteMessage(req.params.id)
        .then((data) => {
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
        })
        .catch((e) => {
            response.error(req, res, 'Error interno', 500, e)
        })
})

module.exports = router;
