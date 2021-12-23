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

eval("// const API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4OTY2NiwiZXhwIjoxOTU1MTY1NjY2fQ.61uxHqbNW70gKjOYqYVZ_xrG7sZlocp8vy37SSf2KHM\"\n// const API_URL = \"https://begawfkjokyyfiqpcwzp.supabase.co/rest/v1/Apprenant\",\n\n//Récuperer les éléments du DOM\nconst positionElement = document.getElementById(\"formulaire\")\nconst inputNom = document.querySelector(\"#nom\")\nconst inputPrenom = document.querySelector(\"#prenom\")\nconst inputEmail = document.querySelector(\"#email\")\nconst inputNiveau = document.querySelector(\"#niveau\")\nconst inputBiographie = document.querySelector(\"#biographie\")\nconst carteContainer = document.querySelector(\".carte\")\n\n// RECUPERATION DES INFORMAIONS DU FORMULAIRE\npositionElement.addEventListener(\"submit\", (event) => {\n    event.preventDefault()\n    if (inputNom.value.trim() == \"\") {\n      const error = document.getElementById(\"error\")\n      error.innerHTML = \"Tous les champs sont requis\"\n      error.style.color = \"red\"\n      \n    }\n    // Récupération des informations saisies\n    const nomSaisi = inputNom.value\n    const prenomSaisi = inputPrenom.value\n    const emailSaisi = inputEmail.value\n    const biographieSaisi = inputBiographie.value\n    const niveauSaisi = inputNiveau.value\n    console.log(nomSaisi, prenomSaisi, emailSaisi, niveauSaisi, biographieSaisi);\n    const newApprenant = {\n      prenom:prenomSaisi,\n      nom:nomSaisi,\n      biographie:biographieSaisi,\n      niveau:niveauSaisi\n    }\n    carteApprenant(newApprenant)\n  })\n\n  function carteApprenant (apprenant){\n    carteContainer.insertAdjacentHTML(\"beforeend\", `\n    <div class=\"card mt-3\">\n                <div class=\"profil\">\n                    <img src=\"./images/image.jpg\" alt=\"\" srcset=\"\">\n                </div>\n                <div class=\"profil-main\">\n                <h6 class=\"profil-nom\">${apprenant.nom} ${apprenant.prenom}</h6>\n                <p class=\"profil-body\">${apprenant.biographie}</p>\n                <br>\n                <p class=\"profil-position\">${apprenant.niveau}</p>\n                </div>\n            </div>`)\n  }\n\n\n\n//# sourceURL=webpack://schoolapplication/./script.js?");

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