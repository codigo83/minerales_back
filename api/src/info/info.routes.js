const express = require('express');
const _ = require('underscore');

const infoRouter = express.Router();

const infoController = require('./info.controller')

infoRouter.get('/', (req, res) => {
    return infoController.find()
        .then(info => {
            console.log('Recupera la info!!');
            res.status(200).json(info);
        })
})


module.exports = infoRouter