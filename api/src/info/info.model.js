const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    dureza: {
        type: Object
    },
    color: {
        type: Object
    },
    raya: {
        type: Object
    },
    brillo: {
        type: Object
    },
    fractura: {
        type: Object
    },
    exfoliacion: {
        type: Object
    },
   
});

module.exports = mongoose.model('info', infoSchema, 'info');