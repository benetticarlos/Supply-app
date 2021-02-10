// Codigo firebase Carlos
var firebaseConfig = {
    apiKey: "AIzaSyCmRFONWKjnYGHrny9AqeXqJS7FxfC4R9E",
    authDomain: "localstorage-e6721.firebaseapp.com",
    projectId: "localstorage-e6721",
    storageBucket: "localstorage-e6721.appspot.com",
    messagingSenderId: "719797837765",
    appId: "1:719797837765:web:6cf7cce3a249d07edbf5ac",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//traer el formulario
let formularioServicio = document.getElementById("formularioServicio");

//cuando aprete el botón enviar datos se ejecutara esta funcion
formularioServicio.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("me diste un click");

    //traigo los datos del formulario
    let Datos = new FormData(formularioServicio);

    //funcion "precio" dependiendo si esta
    //presionado el check o no
    let precio = "";
    let precioCheck = document.getElementById("acordarVendedor");

    if (precioCheck.checked) {
        precio = "a acordar con el vendedor";
    } else {
        precio = Datos.get("precio");
    }

    console.log("este es mi ", precio);

    //tomar valores del select
    let SelectRubros = document.getElementById("rubros");
    let rubro = SelectRubros.value;

    // consologeamos los valores
    console.log(Datos);
    console.log("este es mi publicacion: ", Datos.get("publicacion"));
    console.log("este es mi rubro: ", rubro);
    console.log("este es mi precio: ", Datos.get("precio"));
    console.log("este es mi zona: ", Datos.get("zona"));
    console.log("este es mi detalle: ", Datos.get("detalle"));
    console.log("esto es mi blob ", blobImagen);

    //Recojo los datos para enviarlos al servidor
    let _data = {
        publicacion: Datos.get("publicacion"),
        detalle: Datos.get("detalle"),
        precio: precio,
        zona: Datos.get("zona"),
        imagenurl: srcImagen,
        rubro: rubro,
        condicion: "",
        idusuario: "",
    };

    fetch("http://localhost:8080/ingresarproducto", {
        method: "POST",
        body: JSON.stringify(_data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
}); //termina el addeventlistener

// Cargado de la imagen

//  Funcion que se ejecuta cuando se carga una imagen
var blobImagen = "";
imagenurl.addEventListener("change", function (e) {
    //  Recojo el archivo subid
    archivo = e.target.files[0];
    // lo convierte en BLOB
    const imgCodified = URL.createObjectURL(archivo);
    pruebasrc.src = imgCodified;
    console.log(imgCodified);
    blobImagen = imgCodified;

    //  Elimina el icono para que no se pise con la imagen
    var padre = document.getElementById("IngresarImagenBoton");
    var hijo = document.getElementById("iconoDescarga");
    padre.removeChild(hijo);
});

// FIREBASE

function iniciar() {
    // Consigo el ultimo ID
    var ultimoId = "";
    fetch("http://localhost:8080/ultimoId")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((elemento) => {
                elemento.UId;
                maxId = elemento.UId;
                console.log(maxId);

                // Cambio el nombre de la imagen por el del ID + 1
                // para ligarla con el formulario que sigue
                nombreImagen = "imagen" + (maxId + 1);
                console.log("este es el nombre: ", nombreImagen);

                var imagenurl = document.getElementById("imagenurl");

                imagenurl.addEventListener("change", function (e) {
                    //tomar archivo
                    var archivo = e.target.files[0];

                    //crear referencia storage
                    var storageRef = firebase.storage().ref("imagenes/" + nombreImagen);

                    // subir archivo
                    storageRef.put(archivo);

                    console.log("imagen subida a firebase");

                    // Cambia el src de la imagen en el documento
                    // por la URL de la imagen en firebase

                    srcImagen = `https://firebasestorage.googleapis.com/v0/b/localstorage-e6721.appspot.com/o/imagenes%2F${nombreImagen}?alt=media&token=9c172991-c595-4817-82a5-589496d554e1`;

                    console.log(pruebasrc);
                });
            });
        });
}

// Inicia la funcion cuando carga la pagina
window.onload = iniciar;

//redireccionar a cuerpo
const botonPublicarBusqueda = document.querySelector("#botonPublicarBusqueda");

botonPublicarBusqueda.addEventListener("click", () => {
    setTimeout(() => {
        location.href = "http://localhost:8080/cuerpo.html";
    }, 500);
});
