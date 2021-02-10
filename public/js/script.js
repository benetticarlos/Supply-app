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
const containerTarjeta = document.querySelector("#containerTarjeta");

//direccionar una pagina

const direccionarA = (htmlNombre) => {
  window.location.href = "../" + htmlNombre;
};

var miDato = [{}];

fetch("http://localhost:8080")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // console.log(data[0].imagenurl)

    miDato = data;

    data.forEach((elemento) => {
      // console.log(elemento.id);
      // console.log(elemento.detalle);
      // console.log("esta es la imagen ", elemento.imagenurl);
      console.log(elemento.precio);
      containerTarjeta.innerHTML += `
        <div id="cargaDinamica" OnClick='editarDatosModal("${elemento.publicacion}","${elemento.detalle}","${elemento.imagenurl}","${elemento.precio}","${elemento.condicion}","${elemento.rubro}")' class="col" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div id="unaTrajeta" class="card">
          <div id="publicacionBandera" style="display:none">${elemento.id}</div>
          <img id="imgTarjeta" src=${elemento.imagenurl} class="card-img-top" alt="...">
          <div id="cuerpoTrajeta" class="card-body">
            <h5 id="cardTitle" class="card-title">${elemento.publicacion}</h5>
            <p id="cardText"class="card-text">
              ${elemento.detalle} <br> <hr />
              <strong>  -Precio:  </strong> ${elemento.precio} <br>
              <strong>  -Condicion:  </strong> ${elemento.condicion}  <br>
              <strong>  -Rubro:  </strong> ${elemento.rubro}
            </p>            
          </div>
        </div>
      </div>
        `;
    });
  });
