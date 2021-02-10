



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

//ilnk iniciar sesion/ registrarse
const iniciarSesionRegistrarse = document.querySelector("#iniciarSesionRegistrarse")




//link iniciar sesion o loguearse
iniciarSesionRegistrarse.addEventListener("click", ()=>{
  location.href = "http://localhost:8080/login.html"
})


// boton publicar carga link dinamico
botonPublicar.addEventListener("click", ()=>{
  verificarEstadoLogin()
  
})

///se utiliza para saber cuando un usuario es ta logueado
const verificarEstadoLogin = ()=>{
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("usuario logueado, f verificarEstadoLogin")
      
        console.log("usuario logueado, f change")
        linkBotonPublicar.href = "./publicarBusqueda.html"  
        
    } else {
        //si no esta logueado o se desloguea
         console.log("usuario nullo, deslogueado, f change");
        
        
        linkBotonPublicar.href = "./login.html"  
        
        
         
    }
  
  })
  
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //aqui toda configuracion par usuario logiueado
    console.log("..... logueado, escuchaor general")    
    linkBotonPublicar.href = "./publicarBusqueda.html"  
    imagenNavbarPerfilConteiner.style.display = "block"
    iniciarSesionRegistrarse.style.display = "none"
    botonPerfil.style.display = "true"     
    console.log("..... logueado fin, escuchador general")

    //fin de configuracion para usuario logueado

    //configuracion y control no tocar
    console.log(`El susuario ${email} esta logueado`)
    // verificacionLogin()
    //fin de configuracion
    
  } else {
    
    console.log("..... deslogueado, escuchaor general")    
      //si no esta logueado o se desloguea
       console.log("usuario nullo, deslogueado, f change");
       imagenNavbarPerfilConteiner.style.display = "none"
       botonPerfil.style.display = "none"
       linkBotonPublicar.href = "./login.html"  
       iniciarSesionRegistrarse.style.display = "true"      
       console.log("..... deslogueo fin, escuchador general")       
  }
})

//optimizado no utilizado
const verificacionLogin = ()=>{
  
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
  
    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;  
      

      console.log("..... logueado fin, verificarlogin fin")
      console.log(`El susuario ${email} esta logueado`)
      
      
    }else{  
      
      console.log(`Error al loguear ususario ${email}, f verificacionLogin()`)
    }
  }
  
const cerrarSesion = ()=>{
  firebase.auth().signOut().then(() => {
    iniciarSesionRegistrarse.style.display = "true"   
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
//boton perfil
btnPerfil.addEventListener("click", ()=>{
  location.href = "http://localhost:8080/perfil.html"
})


//carga una tarjeta en modal

var datosParaModal = {}

//containerTarjeta no utilizado ya que se utilizo una funcion lanzada desde la tarjeta
containerTarjeta.addEventListener("click", ()=>{
 
  
  // console.log("esta es una tarjeta =>", unaTrajeta)

  
  // const imgTarjeta = containerTarjeta.querySelector("#imgTarjeta").getAttribute("src")
  // const titulo = containerTarjeta.querySelector("#cardTitle").textContent
  // const cardText = containerTarjeta.querySelector("#cardText").textContent
  // console.log(titulo, imgTarjeta, cardText )
  // datosParaModal={
  //   "publicacion":titulo,
  //   "detalle": cardText,
  //   "imgUrl": imgTarjeta
  // }
  // const exampleModal = document.querySelector("#exampleModal")
  // console.log("carga dinamica es: ", exampleModal)
  // const publicacionModal = exampleModal.querySelector("#publicacionModal")
  // const detalleModal = exampleModal.querySelector("#detalleModal")
  // const imgModal = exampleModal.querySelector("#imgTarjetaModal").getAttribute("src")
  // console.log("datos del modal: ",publicacionModal, detalleModal, imgModal)

  // publicacionModal.textContent = datosParaModal.publicacion
  // detalleModal.textContent = datosParaModal.detalle
  // imgModal.setAttribute("src", datosParaModal.imgUrl)
  

  })

  //funcion lanzada desde la tarjeta para editar el modal, valores vienen desde script.js
  const editarDatosModal = (varPublicacion, varDetalle, varImagen)=>{
      
      //capturo modal
      const exampleModal = document.querySelector("#exampleModal")
      
      //capturo los elementos detro del modal
      const publicacionModal = exampleModal.querySelector("#publicacionModal")
      const detalleModal = exampleModal.querySelector("#detalleModal")
      const imgModal = exampleModal.querySelector("#imgTarjetaModal")
      
      //edito los valores del modal, con valores que recibe la funcion de la tarjeta seleccionada, evita usar this
      publicacionModal.textContent = varPublicacion
      detalleModal.textContent = varDetalle
      //forma para editar atributos
      imgModal.setAttribute("src", varImagen)
  }
