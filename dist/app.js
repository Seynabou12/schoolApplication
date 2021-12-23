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

eval("// const API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4OTY2NiwiZXhwIjoxOTU1MTY1NjY2fQ.61uxHqbNW70gKjOYqYVZ_xrG7sZlocp8vy37SSf2KHM\"\n// const API_URL = \"https://begawfkjokyyfiqpcwzp.supabase.co/rest/v1/Apprenant\",\n\n//Récuperer les éléments du DOM\nconst positionElement = document.getElementById(\"formulaire\")\nconst inputNom = document.querySelector(\"#nom\")\nconst inputPrenom = document.querySelector(\"#prenom\")\nconst inputEmail = document.querySelector(\"#email\")\nconst inputTelephone = document.querySelector(\"#telephone\")\nconst inputBiographie = document.querySelector(\"#biographie\")\n\n// RECUPERATION DES INFORMAIONS DU FORMULAIRE\npositionElement.addEventListener(\"submit\", (event) => {\n    event.preventDefault()\n  \n    // Récupération des informations saisies\n    const prenomSaisi = inputNom.value\n    const nomSaisi = inputPrenom.value\n    const emailSaisi = inputEmail.value\n    const telephoneSaisi = inputTelephone.value\n    const biographieSaisi = inputBiographie.value\n\n    // if (nomSaisi.trim().length < 5 || prenomSaisi.trim().length < 10 || emailSaisi.trim().length < 10\n    // || telephoneSaisi.trim().length < 10 || biographieSaisi.trim().length < 10) {\n    //  nomSaisi.classList.add('invalid')\n    //   prenomSaisi.classList.add('invalid')\n    //   emailSaisi.classList.add('invalid')\n    //   telephoneSaisi.classList.add('invalid')\n    //   biographieSaisi.classList.add('invalid')\n    //   alert(\"Merci de saisir des informations correctes\")\n    //   return\n    // }\n\n  })\n  \n\n\n\n//# sourceURL=webpack://schoolapplication/./script.js?");

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