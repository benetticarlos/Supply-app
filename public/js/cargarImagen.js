      const botonPublicarBusqueda = document.querySelector("#botonPublicarBusqueda")
      
      
      
      
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

    //obtener ultimo id
    var ultimoIdVar =0
    fetch('http://localhost:8080/ultimoId')
      .then(response => response.json())
      .then(data => {
        console.log("este es el ultimo id", data[0]) 
        data.forEach(elemento =>{
          console.log(elemento.UId)
          ultimoIdVar = elemento.UId
          })
      });



    //crear referencia storage
    var storageRef = firebase.storage().ref('imagenes/' + archivo.name)


    // subir archivo
    storageRef.put(archivo)
})





botonPublicarBusqueda.addEventListener("click", (e)=>{
  e.preventDefault()
    //traer ultimo id de base
    
    
    //guardar imagen de base


    //guardar datos en base

    // data to be sent to the POST request
    let _data = {
      title: "foo",
      body: "bar", 
      userId:1
    }

    fetch('http://localhost:8080/ingresarproducto', {
      method: "POST",
      body: JSON.stringify(_data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err))
})

 