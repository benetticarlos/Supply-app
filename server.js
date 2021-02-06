const express = require('express')
const app = express()

const publicacion_controlles = require('./controllers/publicacionControlles')

let port = 8080

app.use(express.json())
app.use(express.static('public'))

//get post put delete
app.get('/', publicacion_controlles.obtenerPublicacion)
//para obseter el ultimo id cargado
app.get('/ultimoId', publicacion_controlles.obtenerIdUltimaPublicacion)

app.post('/ingresarproducto', publicacion_controlles.agregarPublicacion)

app.post('/ingresarservicio', publicacion_controlles.agregarPublicacion)

app.delete('/borrar', publicacion_controlles.borrarPublicacion)

app.put('/editar', publicacion_controlles.editarPublicacion)

app.post('/SubirImagen', publicacion_controlles.agregarImagen)







app.listen(port,()=>{
    console.log('Escuchando puerto', port)
})
