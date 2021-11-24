const express = require('express');
const _ = require('underscore');

const mineralsRouter = express.Router();

const mineralsController = require('./minerals.controller')

mineralsRouter.get('/', (req, res) => {
    return mineralsController.find()
        .then(minerals => {
            console.log('Recupera los minerales!!');
            res.status(200).json(minerals);
        })
})


module.exports = mineralsRouter