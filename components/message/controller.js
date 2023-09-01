const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[Message controller] No hay usuairo o mensaje')
            reject('Los datos son incorrectos');
        } else {
            console.log('Se anadio el mesaje correctamente');
            const fullMessage = {
                user: user,
                message: message,
                date: new Date(),
            }

            store.add(fullMessage);
            resolve(fullMessage);
        }
    })
}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
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

module.exports = {
    addMessage,
    getMessages,
    updateMessage
};