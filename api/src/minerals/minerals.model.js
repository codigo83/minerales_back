const mongoose = require('mongoose');

const mineralSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El mineral debe tener un nombre']   
    },
    descripcion: {
        type: String,
        required: [true, 'El mineral debe tener una descripción']   
    },
    propiedades: {
        type: String
    },
    etimologia: {
        type: String,
    },
    mineralogia: {
        type: Object,
    },
    img: {
        type: String,
    },
    yacimientos: {
        type: Object,
    },
    usos: {
        type: String,
    }
});

module.exports = mongoose.model('mineral', mineralSchema);