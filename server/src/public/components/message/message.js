// message 

const express = require('express')
const message = express.Router()
const response = require('../response/response')
const controller = require('./controller')

message.get('/message', (req, res) => {
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    response.success(req, res, 'mensajes de message')
})

message.post('/message', (req, res) => {

    controller.addMessage(req.body.user, req.body.message)

    if (req.query.error == 'ok') {
        response.error(req, res, 'Error inesperado', 500, 'error simulado')
    }
    else {
        response.success(req, res, 'Sin error', 201)
    }
})

module.exports = message