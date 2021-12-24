const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4OTY2NiwiZXhwIjoxOTU1MTY1NjY2fQ.61uxHqbNW70gKjOYqYVZ_xrG7sZlocp8vy37SSf2KHM"
const API_URL = "https://begawfkjokyyfiqpcwzp.supabase.co/rest/v1/Apprenant";

//Récuperer les éléments du DOM
let erreur = ""
const listApprenant = []
const positionElement = document.getElementById("formulaire")
const inputNom = document.querySelector("#nom")
const inputPrenom = document.querySelector("#prenom")
const inputEmail = document.querySelector("#email")
const inputNiveau = document.querySelector("#niveau")
const inputBiographie = document.querySelector("#biographie")
const carteContainer = document.querySelector(".carte")
const sauvegarde = document.querySelector(".save")
const enregistrer = document.querySelector("#sauvegarde")


// RECUPERATION DES INFORMAIONS DU FORMULAIRE
positionElement.addEventListener("submit", (event) => {
    event.preventDefault()
    if (inputNom.value.trim() == "" || inputPrenom.value.trim() == "" || 
    inputEmail.value.trim() == "") {
      const error = document.getElementById("error")
      error.innerHTML = "Tous les champs sont requis"
      error.style.color = "red"
    }
    // if (!inputBiographie.value) {
    //   erreur = "Veuillez renseigner une biographie"
    // }
    // if (!inputEmail.value) {
    //   erreur = "Veuillez renseigner un email"
    // }
    // if (!inputPrenom.value) {
    //   erreur = "Veuillez renseigner un prenom"
    // }
    // if (!inputNom.value) {
    //   erreur = "Veuillez renseigner un nom"
    // }
    // if (erreur) {
    //   event.preventDefault()
    //   document.getElementById('erreur').innerHTML = erreur
    //   return false;
    // }
    // else{
    //   alert("Apprenant ajouter avec succé")
    // }
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
  function carteApprenant (apprenant){
    let id = Math.random().toString()
    sauvegarde.insertAdjacentHTML("beforeend", `
        <div class="card mt-3" id="${id}">
            <div class="profil d-flex justify-content-evenly ">
              <img src="./images/image.jpg" alt="" srcset="">
              <div class="edit">
              <i class="bi bi-pencil"></i>
              </div>
              <div class="trash-icon">
              <i class="bi bi-trash"></i>
              </div>
            </div>
            <div class="profil-main">
            <h6 class="profil-nom" data-nom="${apprenant.nom}" data-prenom="${apprenant.prenom}" >${apprenant.nom} ${apprenant.prenom}</h6>
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
        })
        
        //Modification de la carte en local
        const modifier = card.querySelector(".bi-pencil")
        modifier.addEventListener('click', (event) => {

          const nom = card.querySelector(".profil-nom").dataset.nom
          const prenom = card.querySelector(".profil-nom").dataset.prenom
          const email = card.querySelector(".email").textContent
          const bio = card.querySelector(".profil-body").textContent
          const niveau = card.querySelector(".profil-position").textContent
          
          inputNom.value=nom
          inputPrenom.value=prenom
          inputEmail.value=email
          inputBiographie.value=bio
          inputNiveau.value=niveau
        }) 
      }
  
   
          
      
      

      
      

