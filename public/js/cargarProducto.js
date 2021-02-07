
//traer el formulario
let formularioProducto = document.getElementById('formularioProducto')


//cuando aprete el botón enviar datos se ejecutara esta funcion
formularioProducto.addEventListener('submit', function (e) {
    e.preventDefault();
    
    //traigo los datos del formulario
    let datos = new FormData(formularioProducto)
    
    
    //funcion para tomar los datos del check "condicion"
    let condicionCheck = "";
    
    let nuevo = document.getElementById("nuevo")
    let usado = document.getElementById("usado")
    let indistinto = document.getElementById("indistinto")
    
    if (nuevo.checked) {
        condicionCheck = nuevo.value
    }else if (usado.checked) {
        condicionCheck = usado.value
    }else {
        condicionCheck = indistinto.value
    }
    
    console.log(condicionCheck);


    //funcion "precio" dependiendo si esta
    //presionado el check o no

    let precio = ""

    let precioCheck = document.getElementById("acordarVendedor")

    if (precioCheck.checked) {
        precio = "a acordar con el vendedor"
    }else {
        precio = datos.get('precio')
    }

console.log("este es mi ", precio);



    
    

let _data = {
    "publicacion": datos.get('publicacion'), 
    "detalle": datos.get('detalle'),
    "precio": precio,
    "zona": datos.get('zona'),
    "imagenurl": blobImagen,
    "rubro": "",
    "condicion": condicionCheck,
    "idusuario": ""
  }


  fetch('http://localhost:8080/ingresarproducto', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err))



    
  console.log(datos);
  console.log("publicacion: ", datos.get('publicacion'));
  console.log("precio: ", precio);
  console.log("zona:", datos.get('zona'));
  console.log("condicion:",condicionCheck);
  console.log("imagen: ",blobImagen);
  

})












imagenurl.addEventListener('change', function (e) {
        //tomar archivo

        // const p1 = fetch('http://localhost:8080/subirImagen', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/blob'
        //     }
        // })
        // .then(response => response.blob)
        // .then(archivo = e.target.files[0])
        // .then(binaryLargeObject => {
        //     const domString = URL.createObjectURL(binaryLargeObject)
        //     console.log(domString);
        // })

        // var archivo = e.target.files[0];
        
        // const p1 = fetch('http://localhost:8080/ultimoId')
        // p1
        //   .then(response => response.json())
        //   .then(data =>{
        //     data.map(elemento =>{ elemento.UId
        //     maxId = elemento.UId
        //     console.log(maxId);
        //     })
        //     console.log(maxId);
        //   }) 
          


//         var archivo = e.target.files[0];
// const getBlob = fetch('http://localhost:8080/ingresarproducto')
// .then(function(response) {
//   return response.blob();
// })
// .then(function(blob) {
//   var objectURL = URL.createObjectURL(blob);
//   pruebasrc.src = objectURL;

//   console.log(objectURL);
// });

})


// const getDatos = () => {
// setTimeout(() => {
//     console.log(objectURL);
// }, 10000);
// }

var blobImagen = ""



imagenurl.addEventListener('change', function (e) {
    archivo = e.target.files[0]
    // console.log(archivo);
    
    const imgCodified = URL.createObjectURL(archivo)
    pruebasrc.src = imgCodified

    console.log(imgCodified);

    blobImagen = imgCodified

    var padre = document.getElementById("IngresarImagenBoton")
    var hijo = document.getElementById("iconoDescarga")

    padre.removeChild(hijo)


})





