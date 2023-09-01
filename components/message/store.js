// Importamos nuestro modelo
const Model = require('./model');

function addMessage(message) {
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save()
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser !== null) {
            filter = {user: filterUser};
        }
        Model.find(filter)
            .populate('user')
            .then((populated) => {
                resolve(populated);
            })
            .catch((e) => {
                reject(e);
            })
    })
    
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

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage
    // get
    // update
    // delete
}