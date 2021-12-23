// const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4OTY2NiwiZXhwIjoxOTU1MTY1NjY2fQ.61uxHqbNW70gKjOYqYVZ_xrG7sZlocp8vy37SSf2KHM"
// const API_URL = "https://begawfkjokyyfiqpcwzp.supabase.co/rest/v1/Apprenant",

//Récuperer les éléments du DOM
const positionElement = document.getElementById("formulaire")
const inputNom = document.querySelector("#nom")
const inputPrenom = document.querySelector("#prenom")
const inputEmail = document.querySelector("#email")
const inputTelephone = document.querySelector("#telephone")
const inputBiographie = document.querySelector("#biographie")

// RECUPERATION DES INFORMAIONS DU FORMULAIRE
positionElement.addEventListener("submit", (event) => {
    event.preventDefault()
  
    // Récupération des informations saisies
    const prenomSaisi = inputNom.value
    const nomSaisi = inputPrenom.value
    const emailSaisi = inputEmail.value
    const telephoneSaisi = inputTelephone.value
    const biographieSaisi = inputBiographie.value

    // if (nomSaisi.trim().length < 5 || prenomSaisi.trim().length < 10 || emailSaisi.trim().length < 10
    // || telephoneSaisi.trim().length < 10 || biographieSaisi.trim().length < 10) {
    //  nomSaisi.classList.add('invalid')
    //   prenomSaisi.classList.add('invalid')
    //   emailSaisi.classList.add('invalid')
    //   telephoneSaisi.classList.add('invalid')
    //   biographieSaisi.classList.add('invalid')
    //   alert("Merci de saisir des informations correctes")
    //   return
    // }

  })
  

