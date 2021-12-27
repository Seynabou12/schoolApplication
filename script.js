const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4OTY2NiwiZXhwIjoxOTU1MTY1NjY2fQ.61uxHqbNW70gKjOYqYVZ_xrG7sZlocp8vy37SSf2KHM"
const API_URL = "https://begawfkjokyyfiqpcwzp.supabase.co/rest/v1/Apprenant"

//Récuperer les éléments du DOM
var error
const listApprenant = []
const positionElement = document.getElementById("formulaire")
const inputNom = document.querySelector("#nom")
const inputPrenom = document.querySelector("#prenom")
const inputEmail = document.querySelector("#email")
const inputNiveau = document.querySelector("#niveau")
const inputBiographie = document.querySelector("#biographie")
const inputPhoto = document.querySelector("#photo")
const carteContainer = document.querySelector(".carte")
const sauvegarde = document.querySelector(".save")
const enregistrer = document.querySelector("#sauvegarde")
const ajout = document.querySelector(".btn-ajout")
const btnModifier = document.querySelector(".btn-edit")
const redirection =  document.querySelector(".liste")


// RECUPERATION DES INFORMATIONS DU FORMULAIRE
positionElement.addEventListener("submit", (event) => {
    event.preventDefault()
    if (inputNom.value.trim() == "" || inputPrenom.value.trim() == "" || 
    inputEmail.value.trim() == "") {
      const error = document.getElementById("error")
      error.innerHTML = "Tous les champs sont requis"
      error.style.color = "red"
    }

  // Récupération des informations saisies
    const nomSaisi = inputNom.value
    const prenomSaisi = inputPrenom.value
    const emailSaisi = inputEmail.value
    const biographieSaisi = inputBiographie.value
    const niveauSaisi = inputNiveau.value
    const newApprenant = {
            prenom:prenomSaisi,
            nom:nomSaisi,
            email:emailSaisi,
            biographie:biographieSaisi,
            niveau:niveauSaisi
          }
    carteApprenant(newApprenant)
    positionElement.reset()
  })
  //Affichage de la carte
  function carteApprenant (apprenant){
    let id = Math.random().toString()
    sauvegarde.insertAdjacentHTML("beforeend", `
        <div class="card mt-3  mb-3" id="${id}">
          <div class="profil mt-2 ">
              <p><img src="./images/nabou.png" alt="" srcset="" class="photo">${apprenant.photo}</p>
              <img src="./images/pencil.png" class="bi bi-pencil">
              <div class="trash-icon"><img src="./images/trash.png" class="bi bi-trash"></div>
          </div>
            <div class="card-body profil-main">
              <h6 class="profil-nom" data-nom="${apprenant.nom}" data-prenom="${apprenant.prenom}" ><span class="app-nom">${apprenant.nom}</span> <span class="app-prenom">${apprenant.prenom}</span></h6>
              <p class="email">${apprenant.email}</p>
              <p class="profil-body">${apprenant.biographie}</p>
              <br>
              <p class="profil-position">${apprenant.niveau}</p>
            </div>
        </div>`)

        //Suppression des cartes en local
        let card = document.querySelector(`.card[id="${id}"]`)
        const supprimer = card.querySelector(".bi-trash") 
        supprimer.addEventListener('click', (e) => {
          e.target.parentElement.parentElement.parentElement.remove()
          if(confirm("voulez-vous vraiment supprimer cette carte")){}
        })
        
          //Modification de la carte en local
          const modifier = card.querySelector(".bi-pencil")
          modifier.addEventListener('click', (event) => {
          ajout.classList.add("cacher")
          btnModifier.classList.remove("cacher")
          if(confirm("voulez-vous vraiment modifier cette carte")){}
          const nom = card.querySelector(".profil-nom").dataset.nom
          const prenom = card.querySelector(".profil-nom").dataset.prenom
          const appNom = card.querySelector(".app-nom")
          const appPrenom = card.querySelector(".app-prenom")
          const email = card.querySelector(".email").textContent
          const Email = card.querySelector(".email")
          const Bio = card.querySelector(".profil-body")
          const bio = card.querySelector(".profil-body").textContent
          const niveau = card.querySelector(".profil-position").textContent
          const Niveau = card.querySelector(".profil-position")
          
          inputNom.value = nom
          inputPrenom.value = prenom
          inputEmail.value = email
          inputBiographie.value = bio
          inputNiveau.value = niveau
          // inputPhoto.value = photo

          btnModifier.addEventListener("click", (event) => {
            btnModifier.classList.add("cacher")
            ajout.classList.remove("cacher")
            apprenant.nom = inputNom.value
            apprenant.prenom = inputPrenom.value
            apprenant.email = inputEmail.value
            apprenant.biographie = inputBiographie.value
            apprenant.niveau = inputNiveau.value

            appNom.textContent = apprenant.nom
            appPrenom.textContent =  apprenant.prenom
            Email.textContent = apprenant.email
            Bio.textContent = apprenant.biographie
            Niveau.textContent = apprenant.niveau
          })
        }) 
      }

    // Verifiation des mots saisis
    inputBiographie.addEventListener("input", (event) => {
    const longueurMax = 130
    const contenuSaisi = inputBiographie.value
    const longueurSaisi = contenuSaisi.length
    const reste = longueurMax - longueurSaisi

    //actualiser le dom pour afficher le nombre
    const paragraph = document.getElementById("limit")
    const text = document.getElementById("progress")
    text.textContent = longueurSaisi

    if (reste <= 5) {
      paragraph.style.color = "#ce0033"
      ajout.disabled = false
    } else {
      paragraph.style.color = "#00000"
      ajout.disabled = false
    }
  })

  //Enregistrement au niveau de SUPABASE
//   enregistrer.addEventListener("click", (event) => {
//     event.preventDefault()
//     //ENVOYER LES DONNEES VERS SUPABASE
//     fetch(API_URL, {
//     method: "POST",
//     headers: {
//       apikey: API_KEY,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newApprenant)
//   })
// })