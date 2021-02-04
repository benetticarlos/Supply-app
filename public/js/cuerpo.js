<<<<<<< HEAD
const cargando = document.querySelector("#cargando") 
=======
// capturando pagina de carga
const cargando = document.querySelector("#cargado")
>>>>>>> 6a84e38d7c39ef0228ec860b1b954764fc55f4a3




//base martin
// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyDEHn6TxLcKUoJ-n9362w0HNaVBTuffpe0",
    authDomain: "proyectofinal-9b976.firebaseapp.com",
    projectId: "proyectofinal-9b976",
    storageBucket: "proyectofinal-9b976.appspot.com",
    messagingSenderId: "935267993825",
    appId: "1:935267993825:web:57e3a7957dcbe64bd60fa0"
  };


//   // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.auth().languageCode = 'es';

//configuracion de la pantalla cuerpo
//elementos del dom
const botonPerfil = document.querySelector("#botonPerfil")
const linkBotonPublicar = document.querySelector("#linkBotonPublicar")


///
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // alert(".....")
    verificacionLogin()
    cargando.style.display = "none!important"
    // El usuario está logueado, realiza acciones aquí
    cargando.style.display="none"
  } else {
       console.log("usuario nullo");
       
  }

})


const verificacionLogin = ()=>{
  
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
  
    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;  

      console.log(`El susuario ${email} esta logueado`)
      botonPerfil.style.display = "true" 
      linkBotonPublicar.href = "./publicarBusqueda.html"  
    }else{  
      botonPerfil.style.display = "none"
      linkBotonPublicar.href = "./login.html"  
      console.log(`Error al loguear ususario ${email}, f verificacionLogin()`)
    }
  }
  
const cerrarSesion = ()=>{
  firebase.auth().signOut().then(() => {
    console.log("usuario deslogueado con exito")
  }).catch((error) => {
    // An error happened.
    console.log("deslogueo de usuario con erro: ", error)
  });
}