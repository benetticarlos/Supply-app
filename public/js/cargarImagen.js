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



var upload  = document.getElementById('upload')

upload.addEventListener('change', function (e) {

    //tomar archivo
    var archivo = e.target.files[0];


    //crear referencia storage
    var storageRef = firebase.storage().ref('imagenes/' + "imagen")

    // subir archivo
    storageRef.put(archivo)
})










// window.onload = inicializar

// var upload;
// var storageRef

// function inicializar() {
//     upload = document.getElementById('upload')
//     upload.addEventListener("change", subirImagenAFirebase, false)


//     var storageRef = firebase.storage().ref();
// }

// function subirImagenAFirebase() {
//     var imagenASubir = upload.files[0];

//     var uploadTask = storageRef.child('imagenes/' + imagenASubir.name).put(imagenASubir);

  
//     uploadTask.on('state_changed', 
//     function(snapshot){
//       // se va mostrando el progreso de la subida
//       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log('Upload is ' + progress + '% done');
//       switch (snapshot.state) {
//         case firebase.storage.TaskState.PAUSED: // or 'paused'
//           console.log('Upload is paused');
//           break;
//         case firebase.storage.TaskState.RUNNING: // or 'running'
//           console.log('Upload is running');
//           break;
//       }
//     }, function(error) {
//       // gestionar el error si se produce
//     }, function() {
//       //cuando se ha subido exitosamente la imagen
//       uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
//         console.log('File available at', downloadURL);
//       });
//     });
// }