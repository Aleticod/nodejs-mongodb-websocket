const store = require('./store');

function addMessage(chat, user, message) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error('[Message controller] No hay usuairo o mensaje')
            reject('Los datos son incorrectos');
        } else {
            console.log('Se anadio el mesaje correctamente');
            const fullMessage = {
                chat: chat,
                user: user,
                message: message,
                date: new Date(),
            }

            store.add(fullMessage);
            resolve(fullMessage);
        }
    })
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('Invaled data');
            return false;
        }

        const result = await store.updateText(id, message);
        resolve(result);
        
    })
}

function deleteMessage(id) {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Id invalido');
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch((e) => {
                reject(e);
            })
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
};