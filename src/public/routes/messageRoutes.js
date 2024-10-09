const express = require('express')
const message = express.Router()
const messageController = require('../controllers/messageController')

message.post('/add', messageController.addMenssage)
message.get('/list', messageController.listMessage)

module.exports = {
    message
}