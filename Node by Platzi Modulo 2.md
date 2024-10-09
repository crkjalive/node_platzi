# Curso de NodeJs by Platzi
Carlos Hernandez  

### Servidor NodeJS 
1. node --version /21.7.1
2. npm --version /10.5.0
3. npm init -y ***inicializa el package.json***

### Librerias a instalar 
1. npm i express
2. npm i path
3. npm i nodemon
4. 

### requerir modulos 

***Nativo de Node***, Recomendado
~~~
const express = require('express')
~~~

***ES6***
~~~
import express from 'express'use
~~~

***Code Server.js***  

con app.use todas las url a las que se quieran acceder dirigen al index principal de la app,  
lo que requiere que se use Router de Express para el manejo de rutas  

~~~
const express = require('express')
const app = express()

const port = 3000

app.use('/', (req, res) => {
    res.send('<h1>Bienvenido Express</h1>')
})

// entrega JSON
app.get('/users', (req, res) => { // inaccesible
    res.json({
        name: 'Wizard',
        cc: 80204082,
        cel: 3166471805,
        pro: 'Developer',
        lang: 'Javascript',
        country: 'CO',
        app: 'Pinkylin',
        inst: 'pinkylin2020'
    })
})

//servidor escuchando
app.listen(port, () => {
    console.log(`server on http://localhost:${port}`)
})
~~~

### express.Router() 
Peticiones por POSTMAN  
express.Router() , me permiter majerar las rutas de la app  
GET, POST, DELETE, PUT, PATCH  

~~~
const router = express.Router()


router.get('/users', (req, res) => {
    res.send('Listar mensajes')
})

router.post('/users', (req, res) => {
    res.send('añadir mensajes')
})
~~~

### envio de cabeceras 
~~~
router.post('/url', (req, res) => {
    console.log(req.headers)
    res.status(201).send({ msn: 'Mensaje en JSON', error: '', txt: 'creado correctamente' })

})
~~~

respuesta POSTMAN de las cabeceras  
~~~
{
  'user-agent': 'PostmanRuntime/7.39.1',
  accept: '*/*',
  'cache-control': 'no-cache',
  'postman-token': 'b4211174-7f2c-48c6-965f-61b80ab82905',
  host: 'localhost:3000',
  'accept-encoding': 'gzip, deflate, br',
  connection: 'keep-alive',
  'content-length': '0'
}
~~~

### envio de respuestas planas y JSON
envios planas, vacias, con datos, y estructurados  
podemos enviar el estado de la peticion  
enviar objeto JSON con los clave valor del JSON  

~~~
router.post('/url', (req, res) => {
    res.status(201).send({ msn: 'Mensaje en JSON', error: '', txt: 'creado correctamente' })
})
~~~

### Respuestas Coherentes 
podemos enviar respuestas formateadas para cada peticion de manera coherente estandarizando  
y enviando un mismo formato de respuestas  

***response.js***  
~~~
exports.success = (req, res, message, status) => {
    res.status(status || 200).send(message)
}

exports.error = (req, res, error, status) => {
    res.status(status || 500).send(error)
}
~~~

### Importamos nuestras respuestas fromateadas
podemos responder con mensajes personalizados, y el estado de la peticion  
al ejecutar success y error  

~~~
const response = require('./response')

router.post('/users', (req, res) => {
    response.success(req, res, 'primera respuesta', 400)
})

router.post('/url', (req, res) => {
    response.success(req, res, 'segunda respuesta', 401)
})

router.post('/err', (req, res) => {
    response.error(req, res, 'Error', 500)
})
~~~

### Servidor de estáticos
HTML CSS JS  

~~~
app.use('/app', express.static('public'))
~~~

***con path***  

~~~
const path = require('path')

// entrega estaticos -> el index
app.use('/app', express.static(path.join(__dirname, 'public'))) 
~~~

## Conceptualmente Rutas Controladores y bases de datos 
conceptos flujo de trabajo dentro de node  

1. server.js
2. routes.js / 
3. components /
   1. message /
      1. network 
      2. controller
      3. store
   2. users /
      1. network 
      2. controller
      3. store
   3. Etc...
      1. network / response a nuestro liente 

Según la lógica, cada capa puede trasladarse sin afectar la lógica de las demás capas  

### Rutas y capa de red 
1. / Components / message

### Uso de Rutas y Controllers en el Servidor
***server***  

~~~
const { message } = require('./public/routes/messageRoutes.js')
~~~

***routes***  
lista de rutas ***POST GET*** que ejecutan las funciones del controller  

~~~
const express = require('express')
const message = express.Router()
const messageController = require('../controllers/messageController')

message.post('/add', messageController.addMenssage)
message.get('/list', messageController.listMessage)

module.exports = {
    message
}
~~~

***controller***  
lista de funciones que se ejecutan  

~~~
const addMenssage = (req, res) => {
    //
}

const listMessage = (req, res) => {
    //
}

module.exports = {
    addMenssage,
    listMessage
}
~~~

### Configuracion de vistas 
***server*** */  
~~~
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "/public/views"))
~~~

### Almacenamiento
***Store.js*** 

Mock, para falsear la base de datos, o cualquier servicio  


#### Salto Modulo de bases de datos
no mire los videos de bases de datos con MongoDB  

### Escalando arquitectura, multiples entidades
haciendo el ejemplo con user, y toda la arquitectura final del ejemplo 

***server2.js***  
~~~
const express = require('express')
const app = express()
const port = 3006

app.get('/', (req, res) => {
    res.send('<h1>Hola Mundo</h1>')
})

app.listen(port, (req, res) => {
    console.log(`Server on http://localhost:${port}`)
})
~~~

***store***  
~~~
const Model = require('./model')

function addUser(user) {
    const myUser = new Model(user)
    return myUser.save()
}
module.exports = {
    add: addUser,
}
~~~

***controller***  
~~~
const store = require('./store')

function addUser(name) {

    if (!name) {
        return Promise.reject('Invalide name')
    }

    const user = {
        name
    }

    return store.add(user)
}

module.exports = {
    addUser,
}
~~~

***network***  
~~~
const express = require('express')
const response = require('../response')
const controller = require('./controller')
const router = express.Router()

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(err) {
        response.error(res, res, 'Internal Error', 500, err)
    }
})

module.exports = router
~~~

***response***  
~~~
exports.success = (req, res, message, status) => {
    res.status(status || 200).send({
        error: "",
        message: message
    })
}

exports.error = (req, res, error, status, err) => {
    res.status(status || 500).send({
        error: error,
        message: "",
        err: err
    })
}
~~~

## Como recibir ficheros en NodeJs

quedamos modulo 5 del curso de platzi 2019



