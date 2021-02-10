

//para reelenar las busquedas
// const tarjetasBusquedas = [
//   {
//     img:"./images/carteras.jpg",
//     publicacion:"Publicacion texto",
//     detalle: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
//   },
//   {
//     img:"./images/ropa.jpg",
//     publicacion:"Publicacion texto",
//     detalle: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
//   },
//   {
//     img:"./images/carteras.jpg",
//     publicacion:"Publicacion texto",
//     detalle: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
//   },
//   {
//     img:"./images/carteras.jpg",
//     publicacion:"Publicacion texto",
//     detalle: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
//   },
//   {
//     img:"./images/ropa.jpg",
//     publicacion:"Publicacion texto",
//     detalle: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
//   },
//   {
//     img:"./images/carteras.jpg",
//     publicacion:"Publicacion texto",
//     detalle: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
//   }
// ]


//rellenando tarjetas
const containerTarjeta = document.querySelector("#containerTarjeta")

// tarjetasBusquedas.forEach((elemento, indicea, array)=>{
//   console.log(elemento.img)
//   containerTarjeta.innerHTML += `
//   <div  id="tarjetaConteiner" class="col" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   <div id="unaTrajeta" class="card">
//     <img id="imgTarjeta" src=${elemento.img} class="card-img-top" alt="...">
//     <div id="cuerpoTrajeta" class="card-body">
//       <h5 class="card-title">${elemento.publicacion}</h5>
//       <p class="card-text">
//         ${elemento.detalle}
//       </p>
      
//     </div>
//   </div>
// </div>
//   `
// })


//direccionar una pagina

const direccionarA = (htmlNombre)=>{
  window.location.href='../'+htmlNombre
}

 var miDato = [{}]
fetch('http://localhost:8080')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // console.log(data[0].imagenurl)

   miDato=data

     
    
    data.forEach(elemento => {



    //   reader.onload = function(event) {
    //     console.log('File content:', event.target.result);
    // };
      console.log(elemento.id)
      console.log(elemento.detalle)
      console.log("esta es la imagen ", elemento.imagenurl);
      containerTarjeta.innerHTML += `
        <div id="cargaDinamica"  class="col" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div id="unaTrajeta" class="card">
          <div id="publicacionBandera" style="display:none">${elemento.id}</div>
          <img id="imgTarjeta" src=${elemento.imagenurl} class="card-img-top" alt="...">
          <div id="cuerpoTrajeta" class="card-body">
            <h5 id="cardTitle" class="card-title">${elemento.publicacion}</h5>
            <p id="cardText"class="card-text">
              ${elemento.detalle}
            </p>            
          </div>
        </div>
      </div>
        `
    })
    
  });


 
  