const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4OTY2NiwiZXhwIjoxOTU1MTY1NjY2fQ.61uxHqbNW70gKjOYqYVZ_xrG7sZlocp8vy37SSf2KHM"
const API_URL = "https://begawfkjokyyfiqpcwzp.supabase.co/rest/v1/Apprenant";

//Récuperer les éléments du DOM
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
    if (inputNom.value.trim() == "" ) {
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
                <h6 class="profil-nom">${apprenant.nom} ${apprenant.prenom}</h6>
                <p class="email">${apprenant.email}</p>
                <p class="profil-body">${apprenant.biographie}</p>
                <br>
                <p class="profil-position">${apprenant.niveau}</p>
                </div>
        </div>`)
  
        //supprimer une carte ajouter
        let card = document.querySelector(`.card[id="${id}"]`)
        const supprimer = card.querySelector(".bi-trash")

        //Modification de la carte en local
        const modifier = document.querySelector(".bi-pencil")
        supprimer.addEventListener('click', (e) =>{
          e.target.parentElement.parentElement.parentElement.remove()
        })
        modifier.addEventListener('click', (event) => {
          
        })
      }
      // function updateOrDeleteApprenant(){
      //     const deleteButton = document.querySelectorAll(".bi-trash")
      //     //console.log(deleteButton);
      //     const editButton = document.querySelectorAll(".bi-pencil")
      //     deleteButton.forEach((button) => {
      //       button.addEventListener('click', () => deleteApprenant(button.id))
            
      //     })
      //     editButton.forEach((button) => {
      //       button.addEventListener('click', () => editApprenant(button.id))
      //       alert("bonjout tout le monde")
      //     })
      // }


      // function deleteApprenant(id) {
      //   listApprenant.forEach((apprenant) => {
      //     const positionApprenant = listApprenant.indexOf(apprenant)
      //     apprenant.id === parseInt(id) && listApprenant.splice(positionApprenant, 1)
      //   })
      // listApprenant.forEach((apprenant) => {
      //   if (apprenant.id === parseInt(id)) {
      //       apprenant.nom = newInput.nom,
      //       apprenant.prenom = newInput.prenom,
      //       apprenant.email = newInput.email,
      //       apprenant.biographie = newInput.biographie,
      //       apprenant.niveau = newInput.niveau
      //   }
      //   carteApprenant()
      // }, 

      // modifier.addEventListener("click", (event) => {
      //   const newInput = {
      //     nom : document.getElementById(`NomOfApprenant${id}`),
      //     prenom : document.getElementById(`PrenomOfApprenant${id}`)
      //   }
      //   console.log(newInput)
      //     apprenant.forEach((apprenant) => {
      //       if (apprenant.id === parseInt(id)) {
      //         apprenant.nom = newInput.nom
      //         // apprenant.prenom = newInput.prenom,
      //         // apprenant.email = newInput.email,
      //         // apprenant.niveau = newInput.niveau,
      //         // apprenant.biographie = newInput.biographie
      //       }
      //     })
      // })
      
      

      
      

