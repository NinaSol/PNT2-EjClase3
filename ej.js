const personajes = 
 [{
    id: 1,
    nombre: "Rick",
    edad: 70,
    imagen: "https://pbs.twimg.com/profile_images/1133429263338811393/H4okr2bq_400x400.jpg",
    lugarNacimiento: "USA",
    tipo: "humano"
},
{
    id: 2,
    nombre: "Morty",
    edad: 14,
    imagen: "https://i0.wp.com/fueradeseries.com/wp-content/uploads/2021/06/rick-y-morty-estreno-temporada-5.jpg?fit=1500%2C999&ssl=1",
    lugarNacimiento: "USA",
    tipo: "humano"
},{
    id: 3,
    nombre: "Summer",
    edad: 17,
    imagen: "https://pm1.narvii.com/6591/09ed08bf9fd4e53e4ff3a3dbd0c29e48baffbe91_hq.jpg",
    lugarNacimiento: "USA",
    tipo: "humano"
},{
    id: 4,
    nombre: "Jerry",
    edad: 35,
    imagen: "https://wipy.tv/wp-content/uploads/2020/05/chris-parnell-hablo-sobre-teoria-de-rick-and-morty-1200x900.jpg",
    lugarNacimiento: "USA",
    tipo: "humano"
},{
    id: 5,
    nombre: "Cornvelious ",
    edad: 40,
    imagen: "https://rickandmortyapi.com/api/character/avatar/150.jpeg",
    lugarNacimiento: "USA",
    tipo: "Extraterrestre¿"
},
 ]


 let personajesTag = document.getElementById("personajes");

const findById = () => {
    let id = Number.parseInt(document.getElementById("atributo").value);
    console.log(id == 1);
    let type =  document.getElementById("types").value;
    let foundCharacters = personajes.filter(p => p.id == id || p.tipo === type);

    personajesTag.innerHTML = "";

    if(foundCharacters.length == 0) {
    personajesTag.innerHTML = `<p class="text-white">No se encontraron personajes</p>`;

    }

    foundCharacters.forEach(p => {
        personajesTag.innerHTML +=
       `
       <div class="col-4 pt-2 pb-2">
       <div class="card h-100" style="width: 18rem;">
       <img src=${p.imagen} class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${p.nombre}</h5>
         <p class="card-text">${p.id}</p>
         <p class="card-text">${p.tipo}</p>
         <p class="card-text">${p.edad}</p>
         <p class="card-text">${p.lugarNacimiento}</p>
       </div>
     </div>
     </div>`
    })
   
}

const inicio = () => {
 personajes.forEach(p => {
     personajesTag.innerHTML +=
    `
    <div class="col-4 pt-2 pb-2">
    <div class="card h-100" style="width: 18rem;">
    <img src=${p.imagen} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${p.nombre}</h5>
      <p class="card-text">${p.id}</p>
      <p class="card-text">${p.tipo}</p>
      <p class="card-text">${p.edad}</p>
      <p class="card-text">${p.lugarNacimiento}</p>
    </div>
  </div>
  </div>`
 })
}

window.onload = inicio();

