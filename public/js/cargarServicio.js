
let formularioServicio = document.getElementById('formularioServicio')


formularioServicio.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('me diste un click');

    let Datos = new FormData(formularioServicio)


    






    //funcion "precio" dependiendo si esta
    //presionado el check o no

    let precio = ""

    let precioCheck = document.getElementById("acordarVendedor")

    if (precioCheck.checked) {
        precio = "a acordar con el vendedor"
    }else {
        precio = Datos.get('precio')
    }

console.log("este es mi ", precio);


//funcion para tomar valores del select

let SelectRubros = document.getElementById('rubros')
let rubro = SelectRubros.value


// consologeamos los valores

console.log(Datos);
console.log("este es mi publicacion: ",Datos.get('publicacion'));
console.log("este es mi rubro: ",rubro);
console.log("este es mi precio: ",Datos.get('precio'));
console.log("este es mi zona: ",Datos.get('zona'));
console.log("este es mi detalle: ",Datos.get('detalle'));
console.log("esto es mi blob ",blobImagen);







let _data = {
    "publicacion": Datos.get('publicacion'), 
    "detalle": Datos.get('detalle'),
    "precio": precio,
    "zona": Datos.get('zona'),
    "imagenurl": blobImagen,
    "rubro": rubro,
    "condicion": "",
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


}) //termina el addeventlistener








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

