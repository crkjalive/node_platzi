const express = require('express')
const router = express.Router()
const path = require('path')
const app = express()

const response = require('./public/components/response/response.js')
const { message } = require('./public/routes/messageRoutes.js')
const { data } = require('./public/components/data.js')

const port = 3666

app.use(router)
app.use(message)
app.use('/app', express.static(path.join(__dirname, 'public'))) // estaticos, entrega el index
app.use(express.urlencoded({ extended: false }))

// motor de plantilas ejs
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "/public/views"))


app.get('/', (req, res) => {
    res.send('Bienvenido')
})

app.use('/message', message)

//JSON
router.get('/json', (req, res) => {
    res.json(data)
})

// respuestas formateadas
router.post('/users', (req, res) => {
    response.success(req, res, 'primera respuesta', 201)
})

router.post('/url', (req, res) => {
    response.success(req, res, 'segunda respuesta', 200)
})

router.post('/err', (req, res) => {
    response.error(req, res, 'Page Not Found', 404)
})

app.listen(port, () => {
    console.log(`server on http://localhost:${port}`)
})