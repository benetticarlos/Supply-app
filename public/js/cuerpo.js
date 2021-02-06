
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

// capturando pagina de carga
const cargando = document.querySelector("#cargado")

//boton de cerrar sesion
const btnCerrarSesion = document.querySelector("#btn-cerrarSesion")
//boton de perfil
const btnPerfil = document.querySelector("#btn-Perfil")


//imagen del perfil
const imagenNavbarPerfilConteiner = document.querySelector("#imagenNavbarPerfilConteiner")

//boton flotante publicar
const botonPublicar = document.querySelector("#botonPublicar")

//elementos del dom
const botonPerfil = document.querySelector("#botonPerfil")
const linkBotonPublicar = document.querySelector("#linkBotonPublicar")


// window.onload = verificarEstadoLogin()

botonPublicar.addEventListener("click", ()=>{
  verificarEstadoLogin()
})
///
const verificarEstadoLogin = ()=>{
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
  
      // alert(".....")
      verificacionLogin()
      // cargando.style.display = "none !important"
      // El usuario está logueado, realiza acciones aquí
      // cargando.style.display="none"
        console.log("usuario logueado, f change")
        linkBotonPublicar.href = "./publicarBusqueda.html"  
        imagenNavbarPerfilConteiner.style.display = "block"
    } else {
        //si no esta logueado o se desloguea
         console.log("usuario nullo, deslogueado, f change");
         imagenNavbarPerfilConteiner.style.display = "none"
  
  
        
        linkBotonPublicar.href = "./login.html"  
        
        //  botonPublicar.disabled = "true"
         
    }
  
  })
  
}
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    // alert(".....")
    verificacionLogin()
    // cargando.style.display = "none !important"
    // El usuario está logueado, realiza acciones aquí
    // cargando.style.display="none"
      console.log("usuario logueado, f change")
      linkBotonPublicar.href = "./publicarBusqueda.html"  
      imagenNavbarPerfilConteiner.style.display = "block"
  } else {
      //si no esta logueado o se desloguea
       console.log("usuario nullo, deslogueado, f change");
       imagenNavbarPerfilConteiner.style.display = "none"


      
      linkBotonPublicar.href = "./login.html"  
      
      //  botonPublicar.disabled = "true"
       
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


//control del boton de cerrar sesion

btnCerrarSesion.addEventListener("click", ()=>{
  cerrarSesion()
})
btnPerfil.addEventListener("click", ()=>{
  location.href = "http://localhost:8080/perfil.html"
})

//boton flotante publicar

