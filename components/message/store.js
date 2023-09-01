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

async function updateText(id, message) {
    console.log('[store] este es el id ' + id);
    console.log('[store] este es el message ' + message);
    const foundMessage = await Model.findOne({_id: id});
    console.log('[store] eso tes lo que encuentra' + foundMessage);
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    console.log('[store] esto es lo que se encuentra en' + newMessage);
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText
    // get
    // update
    // delete
}