


//base prueba
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
    }else{  
      botonPerfil.style.display = "none"  
      console.log("Error al loguear ususario")
    }
  }
  verificacionLogin()
