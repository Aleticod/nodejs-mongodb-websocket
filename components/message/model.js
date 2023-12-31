// Importamos mongoose
const mongoose = require('mongoose');

// Creamos una instancia de la clase Schema
const Schema = mongoose.Schema;

// Creamos un Schema para nuestra base de datos
const mySchema = new Schema({
    caht: {
        type: Schema.ObjectId,
        ref: 'Chat'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    },
    file: String,
    date: Date
});

// Creamos un modelo con el schema anterior
const model = mongoose.model('Message', mySchema);

module.exports = model;