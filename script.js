const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4OTY2NiwiZXhwIjoxOTU1MTY1NjY2fQ.61uxHqbNW70gKjOYqYVZ_xrG7sZlocp8vy37SSf2KHM"
const API_URL = "https://begawfkjokyyfiqpcwzp.supabase.co/rest/v1/Apprenant"

//Récuperer les éléments du DOM
var error
//const listApprenant = []
const formulaire = document.getElementById("formulaire")
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
const redirection = document.querySelector(".liste")
let tab = []

// RECUPERATION DES INFORMATIONS DU FORMULAIRE
formulaire.addEventListener("submit", (event) => {
  event.preventDefault()
  if (inputNom.value.trim() == "" || inputPrenom.value.trim() == "" ||
    inputEmail.value.trim() == "") {
    const error = document.getElementById("error")
    error.innerHTML = "Les champs sont requis"
    error.style.color = "red"
    return
  }

  // RECUPERATION DES INFORMATIONS SAISIS
  const nomSaisi = inputNom.value
  const prenomSaisi = inputPrenom.value
  const emailSaisi = inputEmail.value
  const biographieSaisi = inputBiographie.value
  const niveauSaisi = inputNiveau.value
  const newApprenant = {
    prenom: prenomSaisi,
    nom: nomSaisi,
    email: emailSaisi,
    biographie: biographieSaisi,
    niveau: niveauSaisi
  }
  tab.push(newApprenant);
  console.log(tab);
  carteApprenant(newApprenant, tab.length-1)
  formulaire.reset()
})
  
//AFFICHAGE DE LA CARTE
function carteApprenant(apprenant, index){
  let id = Math.random().toString()
  sauvegarde.insertAdjacentHTML("beforeend", `
        <div class="card mt-4" id="${id}">
          <div class="profil mt-2 justify-content-evenly">
              <img src="./images/nabou.png" alt="" srcset="" class="photos">
              <img src="./images/pencil.png" class="bi bi-pencil">
              <div class="trash-icon"><img src="./images/trash.png" class="bi bi-trash"></div>
          </div>
            <div class="card-body profil-main">
              <h6 class="nom-complet" data-nom="${apprenant.nom}" data-prenom="${apprenant.prenom}">${apprenant.prenom} ${apprenant.nom}</h6>
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
    if (confirm("voulez-vous vraiment supprimer cette carte")) { }
    //mettre a jour modifier
    card.remove()
    tab.splice(index, 1)
  })

  //Modification de la carte en local
  const modifier = card.querySelector(".bi-pencil")
  modifier.addEventListener('click', (event) => {
    const nomComplet =  card.querySelector(".nom-complet")
    let nom = nomComplet.dataset.nom
    let prenom = nomComplet.dataset.prenom
    const Email = card.querySelector(".email")
    const Bio = card.querySelector(".profil-body")
    const Niveau = card.querySelector(".profil-position")
    if (confirm("voulez-vous vraiment modifier cette carte")) { }
    
    inputNom.value = nom
    inputPrenom.value = prenom
    inputEmail.value = Email.textContent
    inputBiographie.value = Bio.textContent
    inputNiveau.value = Niveau.textContent
    
    ajout.classList.add("d-none")
    btnModifier.classList.remove("d-none")
    btnModifier.dataset.id = id
    btnModifier.dataset.index = index
  })
}
btnModifier.addEventListener("click", (event) => {
  
  let id = btnModifier.dataset.id
  let index = btnModifier.dataset.index
  let carte = document.getElementById(id)
  const nomComplet =  carte.querySelector(".nom-complet")
  const Email = carte.querySelector(".email")
  const Bio = carte.querySelector(".profil-body")
  const Niveau = carte.querySelector(".profil-position")

  const apprenant = {}
  apprenant.nom = inputNom.value
  apprenant.prenom = inputPrenom.value
  apprenant.email = inputEmail.value
  apprenant.biographie = inputBiographie.value
  apprenant.niveau = inputNiveau.value
  tab.splice(index, 1, apprenant)

  nomComplet.dataset.nom = inputNom.value
  nomComplet.dataset.prenom = inputPrenom.value
  nomComplet.textContent = inputNom.value + " " +inputPrenom.value
  Email.textContent = inputEmail.value
  Bio.textContent = inputBiographie.value
  Niveau.textContent = inputNiveau.value
  btnModifier.classList.add("d-none")
  ajout.classList.remove("d-none")
  formulaire.reset()
})

//Verifiation des mots saisis
inputBiographie.addEventListener("input", (event) => {
  const longueurMax = 130
  const contenuSaisi = inputBiographie.value
  const longueurSaisi = contenuSaisi.length
  const reste = longueurMax - longueurSaisi

  //Actualiser le dom pour afficher le nombre
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

//Envoie des données vers la base de donnée supabase
enregistrer.addEventListener("click", (event) => {
  const cartes = document.querySelectorAll(".card")
  tab.forEach((element, index) => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        apikey: API_KEY,
        "content-type": "application/json",
        prefer: "return=representation",
      },
      body: JSON.stringify(element),
    })
    .then(()=>{
      cartes[index].remove()
    })
  })
  tab = []
}) 