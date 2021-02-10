// Your web app's Firebase configuration
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

function iniciar() {
    var ultimoId = "";
    fetch("http://localhost:8080/ultimoId")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((elemento) => {
                elemento.UId;
                maxId = elemento.UId;
                console.log(maxId);

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

                    var miImagen = document.getElementById("miImagen");

                    miImagen.src = `https://firebasestorage.googleapis.com/v0/b/localstorage-e6721.appspot.com/o/imagenes%2F${nombreImagen}?alt=media&token=9c172991-c595-4817-82a5-589496d554e1`;
                });
            });
        });
}

window.onload = iniciar;

// var imagenurl  = document.getElementById('imagenurl')

// imagenurl.addEventListener('change', function (e) {

//     //tomar archivo
//     var archivo = e.target.files[0];

//     //crear referencia storage
//     var storageRef = firebase.storage().ref('imagenes/' + archivo.name)

//     // subir archivo
//     storageRef.put(archivo)

//     console.log("imagen subida a firebase");

// })

// var boton = document.getElementById('boton')

// boton.addEventListener('click', function () {

// //-----------------Funcion que encuentra el ultimo ID ----------------

//     var ultimoId = ''
//     fetch('http://localhost:8080/ultimoId')
//     .then(response => response.json())
//     .then(data =>{
//         data.forEach(elemento =>{ elemento.UId
//             maxId = elemento.UId
//             console.log(maxId);

// // hago que ei ID sea 1 mayor y lo asigno a miImagen

//             nombreImagen = "imagen" + (maxId + 1)

//             console.log("este es el nombre: ",nombreImagen);

//             var miImagen = document.getElementById("miImagen")

//             miImagen.src = "https://firebasestorage.googleapis.com/v0/b/localstorage-e6721.appspot.com/o/imagenes%2Fbolsitas.jpg?alt=media&token=9c172991-c595-4817-82a5-589496d554e1"

//         })
// })

// })
