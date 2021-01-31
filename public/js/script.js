

//para reelenar las busquedas
const tarjetasBusquedas = [
  {
    img:"./images/carteras.jpg",
    publicacion:"Publicacion texto",
    detalle: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    img:"./images/ropa.jpg",
    publicacion:"Publicacion texto",
    detalle: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    img:"./images/carteras.jpg",
    publicacion:"Publicacion texto",
    detalle: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    img:"./images/carteras.jpg",
    publicacion:"Publicacion texto",
    detalle: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    img:"./images/ropa.jpg",
    publicacion:"Publicacion texto",
    detalle: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    img:"./images/carteras.jpg",
    publicacion:"Publicacion texto",
    detalle: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  }
]




//rellenando tarjetas
const containerTarjeta = document.querySelector("#containerTarjeta")

tarjetasBusquedas.forEach((elemento, indicea, array)=>{
  console.log(elemento.img)
  containerTarjeta.innerHTML += `
  <div  class="col" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <div id="unaTrajeta" class="card">
    <img id="imgTarjeta" src=${elemento.img} class="card-img-top" alt="...">
    <div id="cuerpoTrajeta" class="card-body">
      <h5 class="card-title">${elemento.publicacion}</h5>
      <p class="card-text">
        ${elemento.detalle}
      </p>
      
    </div>
  </div>
</div>
  `
})


