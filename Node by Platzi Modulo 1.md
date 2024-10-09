# Curso de NodeJs by Platzi 
Carlos Hernandez

### NodeJS
no es más que ejecutar Javascript en el servidor 


### Módulo 1

### Peticiones http 
protocolo de comunicacion en internet  

#### Puntos clave 
1. Métodos -> que quieres hacer 
2. Estado -> Cómo ha ido la operación
3. Cuerpo -> Lo que el servidor devuelve  

## Métodos Cabeceras y estados 

Métodos   
1. Verbos que dice los que queremos hacer en el servidor 

- ***GET*** - Siempre que queramos recoger informacion del servidor, listado de elementos, ver HTML o CSS
- ***POST*** - Añadir informacion al servidor, añadir un producto, enviar formulario
- ***PUT*** - reemplazar informacion del servidor, cambiar contenido de una página, reemplazar un producto por otro, editar un mensaje 
- ***PATCH*** - Actualizar parte de la información, cambiar foto usuario, modificar precio 
- ***DELETE*** - Eliminar informacion del servidor, eliminar un mensaje, quitar producto de un carrito
- ***OPTIONS*** - Pedri informacion sobre médtodos, saber si puedo ejecutar ***POST, PUT, PATCH, DELETE***

### Donde aplicar los métodos
En la request  
- POST
- PUT
- PATCH

### Cabeceras
- Autenticacion - Asegurace de que puede pedir cosas al servidor ***Authorization***
- Cache
- Indicaciones
- Condiciones
- Cors -> Cross Origin Resource Sharing, maneja informacion desde afuera de nuestro servicio - Access-Control-Allow-Origin
- Cookies -> son para pedir informacion entre peticiones, guardando usuarios en las cookies
- Accept -> define el contenido que acepta ***(Accept, Accept-Charset, Accept-Encoding)*** 
- Cache -> Almacenamiento temporal (Gestiona durante cuanto tiempo la respuesta será la misma) ***Cache-Control, Expires***  

### Estados 
- 2xx OK Todo ha ido bien
- 3xx la peticion se a movido 
- 4xx Errores del cliente
  - 400 bad request
  - 401 unauthorized
  - 403 forbidden
  - 404 not found
- 500 Errores del servidor 

## Cuerpo y Query de la peticion 

# ***Body***   
informacion que se envia al servidor  

#### Que tiene y cómo viene?
Depende de las cabeceras 
- Content-type: 
  - text/html
  - text/css
  - application/javascript
  - image/jpeg /png /gif
  - apllication/json
  - application/xml
- Content-length


#### en la request 
~~~
[POST]
https://api.com/user
-> content-type: application/json 

{
    "id": "4dx4x45d4d4",
    "name": "Carlos",
    "username": "CodeCarlos"
}
~~~

#### en la response
- cualquier método
- un archivo Js, Css, HTML
- los datos de un producto 

## Query 
informacion extra en la url  
- Orden en el que quieres que se devuelvan los datos
- Parámetro que quieres medir
- url.com/person?orderBy=name&age=25
- tambien sirbe para compartir datos con el frontend ***Ojo*** 
- parámetro por query url.com/?color=red

### Estructura de una query

añadir ? al final de una query  
nombre=valor  
separados con &  
