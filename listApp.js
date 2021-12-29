const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4OTY2NiwiZXhwIjoxOTU1MTY1NjY2fQ.61uxHqbNW70gKjOYqYVZ_xrG7sZlocp8vy37SSf2KHM";
const API_URL = "https://begawfkjokyyfiqpcwzp.supabase.co/rest/v1/Apprenant";


//Recupération des données au niveau de supabase
function listApprenant() {
  fetch(API_URL + "?select=*", {
    method: "GET",
    headers: {
      apikey: API_KEY,
      Authorization: "Bearer " + API_KEY,
    },
  })
  //Conversion en de l'ojet en JSON
    .then((response) => response.json())
    .then((apprenants) => {

      apprenants.forEach((a) => carteApprenant(a));
    });
}

window.addEventListener("DOMContentLoaded", listApprenant);

function carteApprenant(apprenant) {
  let id = apprenant.id;
  const cartes = document.querySelector("#cartes");
  cartes.insertAdjacentHTML(
    "beforeend",
    `
        <div class="col">
        <div class="card mt-2" id="${id}">
          <div class="profil mt-2 justify-content-evenly">
              <p><img src="./images/nabou.png" alt="" srcset="" class="photo">${apprenant.photo}</p>
          </div>
            <div class="card-body profil-main">
              <h6 class="nom-complet" data-nom="${apprenant.nom}" data-prenom="${apprenant.prenom}" >${apprenant.prenom} ${apprenant.nom}</h6>
              <p class="email">${apprenant.email}</p>
              <p class="profil-body">${apprenant.biographie}</p>
              <br>
              <p class="profil-position">${apprenant.niveau}</p>
            </div>
            </div>
        </div>`
  );

  //Suppression des cartes en local
  let card = document.querySelector(`.card[id="${id}"]`);

  //Modification de la carte en local
}
