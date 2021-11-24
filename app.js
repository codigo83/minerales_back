const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');

const mineralsRouter = require('./api/src/minerals/minerals.routes');
const infoRouter = require('./api/src/info/info.routes');



mongoose.connect(config.conection_mongo, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', () => {
   console.error('Fallo la conexión a mongodb');
    process.exit(1);
});

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/minerals', mineralsRouter);
app.use('/api/info', infoRouter);


let server = app.listen(config.port, () => {
    console.log(`Escuchando en el puerto ${config.port}`);
})

module.exports = {
    app,
    server
}