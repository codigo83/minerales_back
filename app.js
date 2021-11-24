const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./conf');


mongoose.connect(config.conection_mongo, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', () => {
    logger.error('Fallo la conexión a mongodb');
    process.exit(1);
});
mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let server = app.listen(config.port, () => {
    logger.info(`Escuchando en el puerto ${config.port}`);
})

module.exports = {
    app,
    server
}