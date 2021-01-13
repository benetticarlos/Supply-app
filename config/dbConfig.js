const mysql = require('mysql')




var conexion_db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
  });
  
  conexion_db.connect(err =>{
      if(err){
          console.log(err)
      }else{
          console.log('conexion exitosa Proyecto Final')
      }
  })
  
  

  module.exports = conexion_db