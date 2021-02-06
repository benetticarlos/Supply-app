let formularioServicio = document.getElementById('formularioServicio')

formularioServicio.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('me diste un click');

    let datosServicio = new FormData(formularioServicio)

    console.log(datosServicio);
    console.log(datosServicio.get('publicacion'));
    console.log(datosServicio.get('precio'));
    console.log(datosServicio.get('zona'));
    console.log(datosServicio.get('detalle'));
    // console.log(datos.get('objectURL'));
    // console.log(blob1);
    // console.log(objectURL);
    console.log(imgCodified);

console.log(file);

})



imagenurl.addEventListener('change', function (e) {
    archivo = e.target.files[0]
    // console.log(archivo);
    
    const imgCodified = URL.createObjectURL(archivo)
    pruebasrc.src = imgCodified

    console.log(imgCodified);



    var padre = document.getElementById("IngresarImagenBoton")
    var hijo = document.getElementById("iconoDescarga")

    padre.removeChild(hijo)


})