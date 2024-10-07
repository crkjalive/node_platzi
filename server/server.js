const express = require('express')
const router = express.Router()
const app = express()

const response = require('./response')

const port = 3000

app.use(router)

app.use('/', (req, res) => {
    res.send('<h1>Bienvenido Express</h1>')
})

app.use('/app', express.static('public')) // estaticos

router.get('/users', (req, res) => {
    res.json({
        name: 'Wizard',
        cc: 80204082,
        cel: 3166471805,
        pro: 'Developer',
        lang: 'Javascript',
        country: 'CO',
        app: 'Pinkylin',
        inst: 'pinkylin2020',
        message: 'Listar mensajes'
    })
})

router.post('/users', (req, res) => {
    response.success(req, res, 'primera respuesta', 201)
    // res.status(201).send({ status: '201', error: 'No error', msn: 'datos enviados por post' })
})

router.post('/url', (req, res) => {
    // res.send(req.headers) // me deja ver las cabeceras 
    // console.log(req.params) // {} me devolvio un object vacio 
    // console.log(req.headers)
    // res.status(201).send({ msn: 'Mensaje en JSON', error: '', txt: 'creado correctamente' })
    response.success(req, res, 'segunda respuesta', 200)
})

router.post('/err', (req, res) => {
    response.error(req, res, 'Page Not Found', 404)
})
app.listen(port, () => {
    console.log(`server on http://localhost:${port}`)
})