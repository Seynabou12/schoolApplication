const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4OTY2NiwiZXhwIjoxOTU1MTY1NjY2fQ.61uxHqbNW70gKjOYqYVZ_xrG7sZlocp8vy37SSf2KHM";
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


  // let niveauHtml = 0
  // let niveauCss = 0
  // let niveauJavaScript = 0
  // let softSkills = 0

  // if (apprenant.niveau == "Niveau Intermédiaire") {
  //   niveauHtml = 40
  //   niveauCss = 30
  //   niveauJavaScript = 20
  //   softSkills = 20
  // }
  // else if (apprenant.niveau == "Nivau Avancé") {
  //   niveauHtml = 50
  //   niveauCss = 50
  //   niveauJavaScript = 60
  //   softSkills = 50
  // }
  // else {
  //   niveauHtml = 20
  //   niveauCss = 10
  //   niveauJavaScript = 10
  //   softSkills = 10
  // }
  cartes.insertAdjacentHTML(
    "beforeend",
     `<div class="col my-4 mt-4">
        <div class="card mt-2" id="${id}">
          <div class="profil mt-2 justify-content-evenly">
            <img src="./images/nabou.png" alt="" srcset="" class="photos">
          </div>
          <div class="card-body profil-main">
            <h6 class="nom-complet" data-nom="${apprenant.nom}" data-prenom="${apprenant.prenom}" >${apprenant.prenom} ${apprenant.nom}</h6>
            <p class="email">${apprenant.email}</p>
            <p class="profil-body">${apprenant.biographie}</p>
              <br>
            <div class="row">
              <div class="col-3">
                <button type="button" class="details" id="detail${id}" data-bs-toggle="modal" data-bs-target="#modal${id}">Détails</button>
              </div>
              <div class="col-9">
                <p class="profil-position">${apprenant.niveau}</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
      
      <div class="modal fade" id="modal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
           <div class="modal-content">
             <div class="modal-header">
               <h3 class="modal-title" id="modalLabel${id} align-items-center">Details de l'Apprenant</h3>
               <button type="button" class="btn-close btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
          <div class="modal-body justify-content-center">
            <div class="row align-items-center">
              <img src="./images/nabou.png" alt="" srcset="" class="photo">
            </div>
            <br>
            <div class= "name text-align-center text-uppercase font-weight-bold">
              <strong> ${apprenant.prenom} ${apprenant.nom} </strong>
            </div>
            <br>
            <div class=" email align-items-center">
              ${apprenant.email}
            </div>
            <br>
            <div class=" biographie align-items-center">
              ${apprenant.biographie}
            </div>
            <br>
            <div class=" niveau align-items-center font-weight-bold">
              <strong>${apprenant.niveau}</strong>
            </div>
            <br>
            <div class=" niveau align-items-center font-weight-bold">
              <strong>COMPETENCES</strong>
            </div>
              <div class="font-weight-bold mb-2">
              <p class="mb-1">Maquetter une Application</p>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: ${apprenant.compt1}%;" aria-valuenow="${apprenant.compt1}" aria-valuemin="0" aria-valuemax="100">${apprenant.compt1}%</div>
              </div>
              </div>
                <div class="font-weight-bold mb-2">
              <p class="mb-1">Creer une base de Donnée</p>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style= "width: ${apprenant.compt2}%;" aria-valuenow="${apprenant.compt2}" aria-valuemin="0" aria-valuemax="100">${apprenant.compt2}%</div>
              </div>
              </div>
              <div class="font-weight-bold mb-2">
              <p class="mb-1">Developper Frontend et Backend</p>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: ${apprenant.compt3}%;" aria-valuenow="${apprenant.compt3}" aria-valuemin="0" aria-valuemax="100">${apprenant.compt3}%</div>
              </div>
              </div>
              <div class="font-weight-bold mb-2">
              <p class="mb-1">Développer des composants d'accès aux données</p>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: ${apprenant.compt4}%;" aria-valuenow="${apprenant.compt4}" aria-valuemin="0" aria-valuemax="100">${apprenant.compt4}%</div>
              </div>
              </div>
              <div class="font-weight-bold mb-2">
              <p class="mb-1">Réaliser une interface utilisateur web statique et adaptable</p>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: ${apprenant.compt5}%;" aria-valuenow="${apprenant.compt5}" aria-valuemin="0" aria-valuemax="100">${apprenant.compt5}%</div>
              </div>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn fermer" data-bs-dismiss="modal">Close</button>
          </div>
         </div>
       </div>
    </div>`
  );
  let card = document.querySelector(`.card[id="${id}"]`);

  const details = document.querySelector(`#detail${id}`);

}
