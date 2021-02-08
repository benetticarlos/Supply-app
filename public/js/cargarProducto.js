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

    //Recojo los datos para enviarlos al servidor
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

// console.log para apreciar la obra de arte que hice
  console.log(datos);
  console.log("publicacion: ", datos.get('publicacion'));
  console.log("precio: ", precio);
  console.log("zona:", datos.get('zona'));
  console.log("condicion:",condicionCheck);
  console.log("imagen: ",blobImagen);
})

//  Funcion que se ejecuta cuando se carga una imagen
var blobImagen = ""
imagenurl.addEventListener('change', function (e) {
    //  Recojo el archivo subido
    archivo = e.target.files[0]
    // lo convierte en BLOB
    const imgCodified = URL.createObjectURL(archivo)
    pruebasrc.src = imgCodified
    console.log(imgCodified);
    blobImagen = imgCodified

    //  Elimina el icono para que no se pise con la imagen
    var padre = document.getElementById("IngresarImagenBoton")
    var hijo = document.getElementById("iconoDescarga")
    padre.removeChild(hijo)
})


//redireccionar a cuerpo
const botonPublicarBusqueda = document.querySelector("#botonPublicarBusqueda")

botonPublicarBusqueda.addEventListener("click", ()=>{
    setTimeout(()=>{
        location.href = "http://localhost:8080/cuerpo.html"
    }, 3000)
})




