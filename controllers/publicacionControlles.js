
const conexion_db = require('../config/dbConfig')

const obtenerPublicacion = (req, res)=>{
    conexion_db.query('select * from mipublicacion_t', (err, result)=>{
        if(err){
            throw err
        
        }else {           
           
                console.log(result)
                res.send(result)
        }
    })
}

const agregarPublicacion = (req, res)=>{
   console.log(req.body)
   const {id, publicacion, detalle} = req.body
    conexion_db.query('INSERT INTO `mipublicacion_t`(`id`, `publicacion`, `detalle`) VALUES (?,?,?)', [id, publicacion, detalle],(err, result)=>{
        if(err){
            throw err
        
        }else {           
           
                console.log(result)
            }
        })
        res.send("alta exitosa")
}

const borrarPublicacion = (req, res) => {
    const {id} = req.body
    conexion_db.query('DELETE FROM `mipublicacion_t` WHERE id = ?',[id] ,(err, result) =>{
if(err){
    throw err
}else{
    console.log(result)
    res.send('elemento borrado')
}
    })
    console.log('elemento borrado')
}

const editarPublicacion = (req, res) =>{
    const {id, publicacion, detalle} = req.body
    conexion_db.query('UPDATE `mipublicacion_t` SET `publicacion`=?,`detalle`=? WHERE id = ?',[publicacion, detalle, id],(err, result) =>{
        if(err){
            throw err
        }else{
            console.log(result)
            res.send('elemento editado')
        }
            })
            console.log('elemento editado')
        }



  
module.exports = {
                    obtenerPublicacion,
                    agregarPublicacion,
                    borrarPublicacion,
                    editarPublicacion
                }



const obtenerPublicacion = (req, res)=>{
    conexion_db.query('select * from publicacion_t', (err, result)=>{
        if(err){
            throw err
        
        }else {           
           
                console.log(result)
                res.send(result)
        }
    })
}

<<<<<<< HEAD
const agregarPublicacion = (req, res)=>{
   console.log(req.body)
   const {id, publicacion, detalle, precio, zona, imagenurl, rubro, condicion, idusuario} = req.body
    conexion_db.query('INSERT INTO `publicacion_t`(`id`, `publicacion`, `detalle`, `precio`, `zona`, `imagenurl`, `rubro`, `condicion`, `idusuario`) VALUES (?,?,?,?,?)', [id, publicacion, detalle, precio, zona, imagenurl, rubro, condicion, idusuario],(err, result)=>{
        if(err){
            throw err
        
        }else {           
           
                console.log(result)
            }
        })
        res.send("alta exitosa")
}

const borrarPublicacion = (req, res) => {
    const {id} = req.body
    conexion_db.query('DELETE FROM `publicacion_t` WHERE id = ?',[id] ,(err, result) =>{
if(err){
    throw err
}else{
    console.log(result)
    res.send('elemento borrado')
}
    })
    console.log('elemento borrado')
}

const editarPublicacion = (req, res) =>{
    const {id, publicacion, detalle} = req.body
    conexion_db.query('UPDATE `publicacion_t` SET `publicacion`=?,`detalle`=? WHERE id = ?',[publicacion, detalle, id],(err, result) =>{
        if(err){
            throw err
        }else{
            console.log(result)
            res.send('elemento editado')
        }
            })
            console.log('elemento editado')
        }



  
module.exports = {
                    obtenerPublicacion,
                    agregarPublicacion,
                    borrarPublicacion,
                    editarPublicacion
                }


const obtenerPublicacion = (req, res)=>{
    conexion_db.query('select * from publicacion_t', (err, result)=>{
        if(err){
            throw err
        
        }else {           
           
                console.log(result)
                res.send(result)
        }
    })
}

const agregarPublicacion = (req, res)=>{
   console.log(req.body)
   const {id, publicacion, detalle, precio, zona, imagenurl, rubro, condicion, idusuario} = req.body
    conexion_db.query('INSERT INTO `publicacion_t`(`id`, `publicacion`, `detalle`, `precio`, `zona`, `imagenurl`, `rubro`, `condicion`, `idusuario`) VALUES (?,?,?,?,?)', [id, publicacion, detalle, precio, zona, imagenurl, rubro, condicion, idusuario],(err, result)=>{
        if(err){
            throw err
        
        }else {           
           
                console.log(result)
            }
        })
        res.send("alta exitosa")
}

const borrarPublicacion = (req, res) => {
    const {id} = req.body
    conexion_db.query('DELETE FROM `publicacion_t` WHERE id = ?',[id] ,(err, result) =>{
if(err){
    throw err
}else{
    console.log(result)
    res.send('elemento borrado')
}
    })
    console.log('elemento borrado')
}

const editarPublicacion = (req, res) =>{
    const {id, publicacion, detalle} = req.body
    conexion_db.query('UPDATE `publicacion_t` SET `publicacion`=?,`detalle`=? WHERE id = ?',[publicacion, detalle, id],(err, result) =>{
        if(err){
            throw err
        }else{
            console.log(result)
            res.send('elemento editado')
        }
            })
            console.log('elemento editado')
        }


  
module.exports = {
                    obtenerPublicacion,
                    agregarPublicacion,
                    borrarPublicacion,
                    editarPublicacion
                }








 const obtenerComentario = (req, res)=>{
        conexion_db.query('select * from comentario_t', (err, result)=>{
                 if(err){
                 throw err
                        
                 }else {           
                           
                                console.log(result)
                                res.send(result)
                        }
                    })
                }
                
const agregarComentario = (req, res)=>{
        console.log(req.body)
        const {id, comentario, id_publicacion} = req.body
        conexion_db.query('INSERT INTO `comentario_t`(`id`, `comentario`, id_publicacion`) VALUES (?,?,?)', [id, comentario, id_publicacion],(err, result)=>{
                        if(err){
                            throw err
                        
                        }else {           
                           
                                console.log(result)
                            }
                        })
                        res.send("alta exitosa")
                }
                
 const borrarComentario = (req, res) => {
        const {id} = req.body
        conexion_db.query('DELETE FROM `comentario_t` WHERE id = ?',[id] ,(err, result) =>{
        if(err){
         throw err
         }else{
         console.log(result)
         res.send('comentario borrado')
                }
                    })
                    console.log('comentario borrado')
                }
                
     const editarComentario = (req, res) =>{
        const {id, comentario, id_publicacion} = req.body
         conexion_db.query('UPDATE `comentario_t` SET `comentario`=?,`detalle`=? WHERE id = ?',[id, comentario, id_publicacion],(err, result) =>{
         if(err){
         throw err
           }else{
           console.log(result)
           res.send('elemento editado')
                        }
                        })
                      console.log('elemento editado')
               }
                
                
                
                  
  module.exports = {
                     obtenerComentario,
                     agregarComentario,
                     borrarComentario,
                     editarComentario
                                }
=======

              
>>>>>>> 99cdf22945337ccc357955d53cc1b9a04de50171
