          //carlos
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
    var storageRef = firebase.storage().ref('imagenes/' + archivo.name)

    // subir archivo
    storageRef.put(archivo)
})





/