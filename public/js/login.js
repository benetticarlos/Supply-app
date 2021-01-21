// function validar() {
//   let usuario, contraseña, correo;
//   usuario = document.getElementById("usuario").value;
//   contraseña = document.getElementById("contraseña").value;
//   correo = document.getElementById("correo").value;
// }

function crearCuenta() {
    registrarse.style.display="block"
    registrarse.style.transition="all .5s ease"
}

let registrarse = document.getElementById("crear-cuenta")
let btn = document.getElementById("toggle")
btn.addEventListener('click', crearCuenta)