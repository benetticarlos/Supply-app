          // Your web app's Firebase configuration
          var firebaseConfig = {
            apiKey: "AIzaSyCmRFONWKjnYGHrny9AqeXqJS7FxfC4R9E",
            authDomain: "localstorage-e6721.firebaseapp.com",
            projectId: "localstorage-e6721",
            storageBucket: "localstorage-e6721.appspot.com",
            messagingSenderId: "719797837765",
            appId: "1:719797837765:web:6cf7cce3a249d07edbf5ac"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);



var imagenurl  = document.getElementById('imagenurl')

imagenurl.addEventListener('change', function (e) {

    //tomar archivo
    var archivo = e.target.files[0];


    //crear referencia storage
    var storageRef = firebase.storage().ref('imagenes/' + archivo.name)

    // subir archivo
    storageRef.put(archivo)
})

var boton = document.getElementById('boton')

boton.addEventListener('click', function () {
    
    var ultimoId = ''
    fetch('http://localhost:8080/ultimoId')
    .then(response => response.json())
    .then(data =>{
        data.forEach(elemento =>{ elemento.UId
            maxId = elemento.UId
            console.log(maxId);
        })
    .then(ultimoId = maxId)
    console.log(maxId);
    })
    console.log("Este es mi ultimo id: ", elemento.UId);
})


// window.onload = inicializar

// var upload;
// // var storageRef

// function inicializar() {
//     upload = document.getElementById('upload')
//     upload.addEventListener("change", subirImagenAFirebase, false)


//     var storageRef = firebase.storage().ref();
// }

// function subirImagenAFirebase() {
//     var imagenASubir = upload.files[0];

//     var uploadTask = storageRef.put(imagenASubir)

// }