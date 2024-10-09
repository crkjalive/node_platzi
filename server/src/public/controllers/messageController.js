const store = require('../db/store')

const addMenssage = (req, res) => {

    const user = req.body.user
    const message = req.body.message

    const date = new Date()

    res.status(200).send(['Array de Datos', lenguages = [{ Frontend: 'Javacript', Backend: 'NodeJS' }, { css: 'tailwind', html: 'ejs', html2: 'jade' }], { user, message, date }])
}

const listMessage = (req, res) => {
    res.send('Listar mensajes')
}

module.exports = {
    addMenssage,
    listMessage
}