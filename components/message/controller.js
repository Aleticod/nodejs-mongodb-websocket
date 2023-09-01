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
            resolve(fullMessage);
        }
    })
}

module.exports = {
    addMessage,
};