// Importamos nuestro modelo
const db = require('mongoose');
const Model = require('./model');

// Pedir a mongoose que use promesas
db.Promise = global.Promise;

// Haremos una conexion de la base de datos
db.connect('mongodb://root:root@127.0.0.1:27017/?authMechanism=DEFAULT&tls=false', {useNewUrlParser: true, useUnifiedTopology: true, dbName: 'telegram'});

console.log('[db]: Conectada con exito');

function addMessage(message) {
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save()
}

async function getMessages() {
    // return list;
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessages
    // get
    // update
    // delete
}