
//base martin
// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyDEHn6TxLcKUoJ-n9362w0HNaVBTuffpe0",
    authDomain: "proyectofinal-9b976.firebaseapp.com",
    projectId: "proyectofinal-9b976",
    storageBucket: "proyectofinal-9b976.appspot.com",
    messagingSenderId: "935267993825",
    appId: "1:935267993825:web:57e3a7957dcbe64bd60fa0",
  };
  
  //   // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//actualizar contraseña
const inputActualizaContrasena = document.querySelector("#inputActualizaContrasena")
const btnActualizaContrasena = document.querySelector("#btnActualizaContrasena")

//actualiza email
const inputActualizaEmail = document.querySelector("#inputActualizaEmail")
const btnActualizaEmail = document.querySelector("#btnActualizaEmail")

btnActualizaContrasena.addEventListener("click", ()=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            if(inputActualizaContrasena.value.length >= 6){

                //actualiza contraseña
                
                var user = firebase.auth().currentUser;
                // var newPassword = getASecureRandomPassword();
                
                var newPassword = inputActualizaContrasena.value
                
                user.updatePassword(newPassword).then(function() {
                  alert("Contraseña Actualizada Con Exito");
                }).catch(function(error) {
                    alert("Contraseña No Actualizada", error);
                  // An error happened.
                });
            }else{
                alert("La contraseña no cumple los parametros obligatorios, tener 6 caracteres...")
            }
        } else {
          alert("El usuario no esta logueado, o bien inicie sesion nuevamente y actualice contraseña ...")
        }
      });
   
})


btnActualizaEmail.addEventListener("click", ()=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            if(inputActualizaEmail.value.length >= 6){

                ///actualizacion de email
                // var user = firebase.auth().currentUser;

                user.updateEmail(user.email).then(function() {
                  alert("Email actualizado con exito")
                }).catch(function(error) {
                    alert("Error al actiualiza correo", error)
                  // An error happened.
                });
            }else{
                alert("El correo no cumple los parametros obligatorios, tener 6 caracteres...")
            }
        } else {
          alert("Error en la autenticacion ...")
        }
      });
   
})






//actualiza perfil de usuario
// var user = firebase.auth().currentUser;

// user.updateProfile({
//   displayName: "Jane Q. User",
//   photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(function() {
//   // Update successful.
// }).catch(function(error) {
//   // An error happened.
// });