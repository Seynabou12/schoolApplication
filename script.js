// const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4OTY2NiwiZXhwIjoxOTU1MTY1NjY2fQ.61uxHqbNW70gKjOYqYVZ_xrG7sZlocp8vy37SSf2KHM"
// const API_URL = "https://begawfkjokyyfiqpcwzp.supabase.co/rest/v1/Apprenant",

//Récuperer les éléments du DOM
const positionElement = document.getElementById("formulaire")
const inputNom = document.querySelector("#nom")
const inputPrenom = document.querySelector("#prenom")
const inputEmail = document.querySelector("#email")
const inputNiveau = document.querySelector("#niveau")
const inputBiographie = document.querySelector("#biographie")
const carteContainer = document.querySelector(".carte")

// RECUPERATION DES INFORMAIONS DU FORMULAIRE
positionElement.addEventListener("submit", (event) => {
    event.preventDefault()
    if (inputNom.value.trim() == "") {
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
    console.log(nomSaisi, prenomSaisi, emailSaisi, niveauSaisi, biographieSaisi);
    const newApprenant = {
      prenom:prenomSaisi,
      nom:nomSaisi,
      biographie:biographieSaisi,
      niveau:niveauSaisi
    }
    carteApprenant(newApprenant)
  })

  function carteApprenant (apprenant){
    carteContainer.insertAdjacentHTML("beforeend", `
    <div class="card mt-3">
                <div class="profil">
                    <img src="./images/image.jpg" alt="" srcset="">
                </div>
                <div class="profil-main">
                <h6 class="profil-nom">${apprenant.nom} ${apprenant.prenom}</h6>
                <p class="profil-body">${apprenant.biographie}</p>
                <br>
                <p class="profil-position">${apprenant.niveau}</p>
                </div>
            </div>`)
  }

