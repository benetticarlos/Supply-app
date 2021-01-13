
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

  
module.exports = {
                    obtenerPublicacion,
                    agregarPublicacion
                }