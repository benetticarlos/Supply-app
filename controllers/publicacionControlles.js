
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
<<<<<<< HEAD
                }





              
=======
                }
>>>>>>> c43d68b9671ddaaa12407bc384cbb018e5d3d2e6
