// function validar() {
//   let usuario, contraseña, correo;
//   usuario = document.getElementById("usuario").value;
//   contraseña = document.getElementById("contraseña").value;
//   correo = document.getElementById("correo").value;
// }

// function crearCuenta() {
//     registrarse.style.display="block"
//     registrarse.style.transition="all .5s ease"
// }

// let registrarse = document.getElementById("crear-cuenta")
// let btn = document.getElementById("toggle")
// btn.addEventListener('click', crearCuenta)




//configuracion firebase



//base original
    // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyAn8mF8akEqrB2GajlvfW0N67pFMfv4bfA",
//     authDomain: "proyectofinal-95c98.firebaseapp.com",
//     projectId: "proyectofinal-95c98",
//     storageBucket: "proyectofinal-95c98.appspot.com",
//     messagingSenderId: "342957279584",
//     appId: "1:342957279584:web:9f1f27bb08ca5422de3605"
//   };

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



//elementos del dom 
//formulario de login y registro
//formulario de registro 
const botonDeRegistro = document.querySelector("#botonDeRegistro")
const  campoEmail = document.querySelector("#staticEmail2")
const  campoPassword = document.querySelector("#inputPassword2")

//formulario de login
const botonDeLogin = document.querySelector("#botonDeLogin")
const  campoEmailLogin = document.querySelector("#emailFormularioLogin")
const  campoPasswordLogin = document.querySelector("#passwordFormularioLogin")

const linkBotonLogin = document.querySelector("#linkBotonLogin")

//contenedores formulario
const formularioRegistro = document.querySelector("#formularioRegistro")
const formularioLogin = document.querySelector("#formularioLogin")



//boton del navbar para iniciar sesion
const btnIniciarSesion = document.querySelector("#btn-iniciarSesion")
const btnRegistro = document.querySelector("#btn-Registrar")



//manejando formularios de login y registro
btnIniciarSesion.addEventListener("click", ()=>{
    formularioLogin.style.display = "inline-block"
    formularioRegistro.style.display = "none"
    btnRegistro.style.display = "block"
    btnIniciarSesion.style.display = "none"
})
btnRegistro.addEventListener("click", ()=>{
    formularioLogin.style.display = "none"
    formularioRegistro.style.display = "inline-block"
    btnIniciarSesion.style.display = "block"
    btnRegistro.style.display = "none"
})




//al enviar datos del formulario de registro
botonDeRegistro.addEventListener("click",(e)=>{
    e.preventDefault()
    
    // console.log(campoEmail.value,campoPassword.value)
    registroUsuario(campoEmail.value, campoPassword.value)
  })
  
  botonDeLogin.addEventListener("click",(e)=>{
    e.preventDefault()
    logueoUsuario(campoEmailLogin.value, campoPasswordLogin.value)    

})

//funciones
  const registroUsuario = (email,password) => {
    alert("antes del logueo de usuario")
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(`El susuario ${email} se registro con exito,f registroUsuario()`)
      escucharCambioUsuario()
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
      verificarEmailContrasena(errorCode, errorMessage, email)
      
      // ..
    });}

const logueoUsuario = (email,password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)  
  .then((user) => {
    console.log("El usuario se logueo con exito, funcion logueoUsuario()")
    escucharCambioUsuario()
        // linkBotonLogin.href = "./cuerpo.html"
        location.href = "http://localhost:8080/cuerpo.html"   
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    verificarEmailContrasena(errorCode, errorMessage, email)
  });
}

const escucharCambioUsuario = ()=>{
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;  

    console.log(`El usuario ${email} esta logueado, f escuchaCambioUsuario()`)
    
    // linkBotonLogin.href = "./cuerpo.html"

  }else{  
    console.log("Error al loguear ususario, f escuchaCambioUsuario()")
  }
}

//controles de email y contraseña
const verificarEmailContrasena = (errorCode, errorMessage, email)=>{
    if("auth/email-already-in-use" == errorCode){
        alert(`El correo ${email} ya posee cuenta, codigo de error: ${errorMessage}`)
      }
    if("auth/weak-password" == errorCode){
        alert(`Verifique contraseña ingresada, codigo de error: ${errorMessage}`)
    }
    if("auth/invalid-email" == errorCode){
        alert(`Verifique Email ingresado, codigo de error: ${errorMessage}`)
    }

}

