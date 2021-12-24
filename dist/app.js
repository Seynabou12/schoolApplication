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

eval("const API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4OTY2NiwiZXhwIjoxOTU1MTY1NjY2fQ.61uxHqbNW70gKjOYqYVZ_xrG7sZlocp8vy37SSf2KHM\"\nconst API_URL = \"https://begawfkjokyyfiqpcwzp.supabase.co/rest/v1/Apprenant\";\n\n//Récuperer les éléments du DOM\nlet erreur = \"\"\nconst listApprenant = []\nconst positionElement = document.getElementById(\"formulaire\")\nconst inputNom = document.querySelector(\"#nom\")\nconst inputPrenom = document.querySelector(\"#prenom\")\nconst inputEmail = document.querySelector(\"#email\")\nconst inputNiveau = document.querySelector(\"#niveau\")\nconst inputBiographie = document.querySelector(\"#biographie\")\nconst carteContainer = document.querySelector(\".carte\")\nconst sauvegarde = document.querySelector(\".save\")\nconst enregistrer = document.querySelector(\"#sauvegarde\")\n\n\n// RECUPERATION DES INFORMAIONS DU FORMULAIRE\npositionElement.addEventListener(\"submit\", (event) => {\n    event.preventDefault()\n    if (inputNom.value.trim() == \"\" || inputPrenom.value.trim() == \"\" || \n    inputEmail.value.trim() == \"\") {\n      const error = document.getElementById(\"error\")\n      error.innerHTML = \"Tous les champs sont requis\"\n      error.style.color = \"red\"\n    }\n    // if (!inputBiographie.value) {\n    //   erreur = \"Veuillez renseigner une biographie\"\n    // }\n    // if (!inputEmail.value) {\n    //   erreur = \"Veuillez renseigner un email\"\n    // }\n    // if (!inputPrenom.value) {\n    //   erreur = \"Veuillez renseigner un prenom\"\n    // }\n    // if (!inputNom.value) {\n    //   erreur = \"Veuillez renseigner un nom\"\n    // }\n    // if (erreur) {\n    //   event.preventDefault()\n    //   document.getElementById('erreur').innerHTML = erreur\n    //   return false;\n    // }\n    // else{\n    //   alert(\"Apprenant ajouter avec succé\")\n    // }\n  // Récupération des informations saisies\n    const nomSaisi = inputNom.value\n    const prenomSaisi = inputPrenom.value\n    const emailSaisi = inputEmail.value\n    const biographieSaisi = inputBiographie.value\n    const niveauSaisi = inputNiveau.value\n    const newApprenant = {\n      prenom:prenomSaisi,\n      nom:nomSaisi,\n      email:emailSaisi,\n      biographie:biographieSaisi,\n      niveau:niveauSaisi\n    }\n    carteApprenant(newApprenant)\n    positionElement.reset()\n  })\n  function carteApprenant (apprenant){\n    let id = Math.random().toString()\n    sauvegarde.insertAdjacentHTML(\"beforeend\", `\n        <div class=\"card mt-3\" id=\"${id}\">\n            <div class=\"profil d-flex justify-content-evenly \">\n              <img src=\"./images/image.jpg\" alt=\"\" srcset=\"\">\n              <div class=\"edit\">\n              <i class=\"bi bi-pencil\"></i>\n              </div>\n              <div class=\"trash-icon\">\n              <i class=\"bi bi-trash\"></i>\n              </div>\n            </div>\n            <div class=\"profil-main\">\n            <h6 class=\"profil-nom\" data-nom=\"${apprenant.nom}\" data-prenom=\"${apprenant.prenom}\" >${apprenant.nom} ${apprenant.prenom}</h6>\n            <p class=\"email\">${apprenant.email}</p>\n            <p class=\"profil-body\">${apprenant.biographie}</p>\n            <br>\n            <p class=\"profil-position\">${apprenant.niveau}</p>\n            </div>\n        </div>`)\n        //Suppression des cartes en local\n        let card = document.querySelector(`.card[id=\"${id}\"]`)\n        const supprimer = card.querySelector(\".bi-trash\") \n        supprimer.addEventListener('click', (e) => {\n          e.target.parentElement.parentElement.parentElement.remove()\n        })\n        \n        //Modification de la carte en local\n        const modifier = card.querySelector(\".bi-pencil\")\n        modifier.addEventListener('click', (event) => {\n\n          const nom = card.querySelector(\".profil-nom\").dataset.nom\n          const prenom = card.querySelector(\".profil-nom\").dataset.prenom\n          const email = card.querySelector(\".email\").textContent\n          const bio = card.querySelector(\".profil-body\").textContent\n          const niveau = card.querySelector(\".profil-position\").textContent\n          \n          inputNom.value=nom\n          inputPrenom.value=prenom\n          inputEmail.value=email\n          inputBiographie.value=bio\n          inputNiveau.value=niveau\n        }) \n      }\n  \n   \n          \n      \n      \n\n      \n      \n\n\n\n//# sourceURL=webpack://schoolapplication/./script.js?");

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