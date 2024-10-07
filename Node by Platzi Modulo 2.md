# Curso de NodeJs by Platzi
Carlos Hernandez  

### Servidor NodeJS 
1. node --version /21.7.1
2. npm --version /10.5.0
3. npm init -y ***inicializa el package.json***

### Librerias a instalar 
1. npm i express 

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

### 3 4 5

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

### envio de respuestas planas 
envios planas, vacias, con datos, y estructurados  
podemos enviar el estado de la peticion  
enviar objeto JSON con los clave valor del JSON  

~~~
router.post('/url', (req, res) => {
        res.status(201).send({ msn: 'Mensaje en JSON', error: '', txt: 'creado correctamente' })

})
~~~

### Respuestas Coherentes 
podemos enviar respuestas formateadas para cada peticion de manera coherente estandarizadas  

***response.js***  
~~~
exports.success = (req, res, message) => {
    res.send(message)
}

exports.error = (req, res, error) => {
    res.send(error)
}
~~~

### importamos nuestras respuestas fromateadas  

~~~
const response = require('./response')


router.post('/users', (req, res) => {
    response.success(req, res, 'primera respuesta')
})

router.post('/url', (req, res) => {
    response.success(req, res, 'segunda respuesta')
})
~~~

### Servidor de estáticos
HTML CSS JS  

~~~
app.use('/app', express.static('public'))
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
1. Components