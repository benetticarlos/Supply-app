const express = require('express')
const app = express()

const publicacion_controlles = require('./controllers/publicacionControlles')

let port = 8080

app.use(express.json())
app.use(express.static('public'))

//get post put delete
app.get('/', publicacion_controlles.obtenerPublicacion)

app.post('/publicacion', publicacion_controlles.agregarPublicacion)

app.delete('/borrar', publicacion_controlles.borrarPublicacion)

app.put('/editar', publicacion_controlles.editarPublicacion)







app.listen(port,()=>{
    console.log('Escuchando puerto', port)
})
