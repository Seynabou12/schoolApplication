/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("const API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4OTY2NiwiZXhwIjoxOTU1MTY1NjY2fQ.61uxHqbNW70gKjOYqYVZ_xrG7sZlocp8vy37SSf2KHM\"\nconst API_URL = \"https://begawfkjokyyfiqpcwzp.supabase.co/rest/v1/Apprenant\"\n\n//Récuperer les éléments du DOM\nvar error\nconst listApprenant = []\nconst formulaire = document.getElementById(\"formulaire\")\nconst inputNom = document.querySelector(\"#nom\")\nconst inputPrenom = document.querySelector(\"#prenom\")\nconst inputEmail = document.querySelector(\"#email\")\nconst inputNiveau = document.querySelector(\"#niveau\")\nconst inputBiographie = document.querySelector(\"#biographie\")\nconst inputPhoto = document.querySelector(\"#photo\")\nconst carteContainer = document.querySelector(\".carte\")\nconst sauvegarde = document.querySelector(\".save\")\nconst enregistrer = document.querySelector(\"#sauvegarde\")\nconst ajout = document.querySelector(\".btn-ajout\")\nconst btnModifier = document.querySelector(\".btn-edit\")\nconst redirection = document.querySelector(\".liste\")\nconst tab = []\n\n\n// RECUPERATION DES INFORMATIONS DU FORMULAIRE\nformulaire.addEventListener(\"submit\", (event) => {\n  event.preventDefault()\n  if (inputNom.value.trim() == \"\" || inputPrenom.value.trim() == \"\" ||\n    inputEmail.value.trim() == \"\") {\n    const error = document.getElementById(\"error\")\n    error.innerHTML = \"Tous les champs sont requis\"\n    error.style.color = \"red\"\n    return\n  }\n\n  // Récupération des informations saisies\n  const nomSaisi = inputNom.value\n  const prenomSaisi = inputPrenom.value\n  const emailSaisi = inputEmail.value\n  const biographieSaisi = inputBiographie.value\n  const niveauSaisi = inputNiveau.value\n  const newApprenant = {\n    prenom: prenomSaisi,\n    nom: nomSaisi,\n    email: emailSaisi,\n    biographie: biographieSaisi,\n    niveau: niveauSaisi\n  }\n  tab.push(newApprenant);\n  console.log(tab);\n  carteApprenant(newApprenant, tab.length-1)\n  formulaire.reset()\n})\n//Affichage de la carte\nfunction carteApprenant(apprenant, index) {\n  let id = Math.random().toString()\n  sauvegarde.insertAdjacentHTML(\"beforeend\", `\n        <div class=\"card mt-2\" id=\"${id}\">\n          <div class=\"profil mt-2 justify-content-evenly\">\n              <p><img src=\"./images/nabou.png\" alt=\"\" srcset=\"\" class=\"photo\">${apprenant.photo}</p>\n              <img src=\"./images/pencil.png\" class=\"bi bi-pencil\">\n              <div class=\"trash-icon\"><img src=\"./images/trash.png\" class=\"bi bi-trash\"></div>\n          </div>\n            <div class=\"card-body profil-main\">\n              <h6 class=\"nom-complet\" data-nom=\"${apprenant.nom}\" data-prenom=\"${apprenant.prenom}\" >${apprenant.prenom} ${apprenant.nom}</h6>\n              <p class=\"email\">${apprenant.email}</p>\n              <p class=\"profil-body\">${apprenant.biographie}</p>\n              <br>\n              <p class=\"profil-position\">${apprenant.niveau}</p>\n            </div>\n        </div>`)\n\n  //Suppression des cartes en local\n  let card = document.querySelector(`.card[id=\"${id}\"]`)\n  const supprimer = card.querySelector(\".bi-trash\")\n  supprimer.addEventListener('click', (e) => {\n    // e.target.parentElement.parentElement.parentElement.remove()\n    \n\n    //mettre a jour modifier\n    card.remove()\n    tab.splice(index, 1)\n    console.log(tab);\n    if (confirm(\"voulez-vous vraiment supprimer cette carte\")) { }\n  })\n\n  //Modification de la carte en local\n  const modifier = card.querySelector(\".bi-pencil\")\n  modifier.addEventListener('click', (event) => {\n    const nomComplet =  card.querySelector(\".nom-complet\")\n    let nom = nomComplet.dataset.nom\n    let prenom = nomComplet.dataset.prenom\n    const Email = card.querySelector(\".email\")\n    const Bio = card.querySelector(\".profil-body\")\n    const Niveau = card.querySelector(\".profil-position\")\n    if (confirm(\"voulez-vous vraiment modifier cette carte\")) { }\n    \n    inputNom.value = nom\n    inputPrenom.value = prenom\n    inputEmail.value = Email.textContent\n    inputBiographie.value = Bio.textContent\n    inputNiveau.value = Niveau.textContent\n    \n    ajout.classList.add(\"d-none\")\n    btnModifier.classList.remove(\"d-none\")\n    btnModifier.dataset.id = id\n    btnModifier.dataset.index = index\n  })\n}\nbtnModifier.addEventListener(\"click\", (event) => {\n  \n  let id = btnModifier.dataset.id\n  let index = btnModifier.dataset.index\n  let carte = document.getElementById(id)\n  const nomComplet =  carte.querySelector(\".nom-complet\")\n  const Email = carte.querySelector(\".email\")\n  const Bio = carte.querySelector(\".profil-body\")\n  const Niveau = carte.querySelector(\".profil-position\")\n  \n  const apprenant = {}\n  apprenant.nom = inputNom.value\n  apprenant.prenom = inputPrenom.value\n  apprenant.email = inputEmail.value\n  apprenant.biographie = inputBiographie.value\n  apprenant.niveau = inputNiveau.value\n  tab.splice(index, 1, apprenant)\n  console.log(tab);\n\n  \n  nomComplet.dataset.nom = inputNom.value\n  nomComplet.dataset.prenom = inputPrenom.value\n  nomComplet.textContent = inputNom.value + \" \" +inputPrenom.value\n  Email.textContent = inputEmail.value\n  Bio.textContent = inputBiographie.value\n  Niveau.textContent = inputNiveau.value\n  btnModifier.classList.add(\"d-none\")\n  ajout.classList.remove(\"d-none\")\n  formulaire.reset()\n})\n\n// Verifiation des mots saisis\ninputBiographie.addEventListener(\"input\", (event) => {\n  const longueurMax = 130\n  const contenuSaisi = inputBiographie.value\n  const longueurSaisi = contenuSaisi.length\n  const reste = longueurMax - longueurSaisi\n\n  //actualiser le dom pour afficher le nombre\n  const paragraph = document.getElementById(\"limit\")\n  const text = document.getElementById(\"progress\")\n  text.textContent = longueurSaisi\n\n  if (reste <= 5) {\n    paragraph.style.color = \"#ce0033\"\n    ajout.disabled = false\n  } else {\n    paragraph.style.color = \"#00000\"\n    ajout.disabled = false\n  }\n})\n\n//Envoie des données vers la base de donnée supabase\nenregistrer.addEventListener(\"click\", (event) => {\n  tab.forEach((element) => {\n    fetch(API_URL, {\n      method: \"POST\",\n      headers: {\n        apikey: API_KEY,\n        \"content-type\": \"application/json\",\n        prefer: \"return=representation\",\n      },\n      body: JSON.stringify(element),\n    })\n  })\n}) \n\n//# sourceURL=webpack://schoolapplication/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;