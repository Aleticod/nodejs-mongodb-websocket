const db = require('mongoose');

// Pedir a mongoose que use promesas
db.Promise = global.Promise;
//'mongodb://root:root@127.0.0.1:27017/?authMechanism=DEFAULT&tls=false'
async function connect(url) {
    // Haremos una conexion de la base de datos
    await db.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, dbName: 'telegram'});
    console.log('[db]: Conectada con exito');
}

module.exports = connect;
