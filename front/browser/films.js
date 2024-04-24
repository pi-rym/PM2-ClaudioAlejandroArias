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

/***/ "./scripts/createMovie.js":
/*!********************************!*\
  !*** ./scripts/createMovie.js ***!
  \********************************/
/***/ (() => {

eval("//const axios = require(\"axios\")\r\nconst genres = [\r\n    \"Actions\",\r\n    \"Comedy\",\r\n    \"Fi-Ci\",\r\n    \"Animation\",\r\n    \"Cartoon\",\r\n    \"Drama\",\r\n    \"Horror\",\r\n    \"Adventure\"\r\n];\r\n\r\nconst btnSubmint = document.getElementById(\"btnSubmit\")\r\nconst btnCleaner = document.getElementById(\"btnCleaner\")\r\nconst options = document.getElementById(\"options\")\r\nconst title = document.getElementById(\"title\")\r\nconst year = document.getElementById(\"year\")\r\nconst director = document.getElementById(\"director\")\r\nconst duration = document.getElementById(\"duration\")\r\nconst rate = document.getElementById(\"rate\")\r\nconst poster = document.getElementById(\"poster\")\r\n\r\nconst renderGenres = () => {\r\n    options.innerHTML = \"\";\r\n    \r\n    for(const genre of genres) {\r\n        const input = document.createElement(\"input\")\r\n        const label = document.createElement(\"label\")\r\n\r\n        input.type = \"checkbox\"\r\n        input.id = genre\r\n        input.name = \"genre[]\"\r\n        input.value = genre\r\n        \r\n        label.htmlFor = genre;\r\n        label.textContent = genre;\r\n\r\n        options.appendChild(input)\r\n        options.appendChild(label)\r\n    }\r\n    return options\r\n}\r\nrenderGenres();\r\n\r\nconst validateCheckbox = () => {\r\n    const checkboxes = document.querySelectorAll('input[name=\"genre[]\"]')\r\n    const genres = []\r\n\r\n    for(const item of checkboxes) {\r\n        if (item.checked){\r\n            item.classList.add(\"selected\")\r\n            genres.push(item.id)\r\n        }\r\n    }\r\n    return genres\r\n}\r\n\r\nconst handlerSubmit = (event) => {\r\n    event.preventDefault()\r\n    const genres = validateCheckbox()\r\n\r\n    if (![title.value, year.value, director.value, duration.value, rate.value, poster.value, genres].every(Boolean)) return alert(\"falta llenar campos\");\r\n    const movie = {\r\n        title: title.value,\r\n        year: year.value,\r\n        director: director.value,\r\n        duration: duration.value,\r\n        rate: rate.value,\r\n        poster: poster.value,\r\n        genre: genres\r\n    }\r\n    //axios.post(\"urlserver\", movie)\r\n    alert(\"pelicula enviada\")\r\n}\r\n\r\n\r\nconst cleanInputs = () => {\r\n    title.value=\"\"\r\n    year.value=\"\"\r\n    director.value=\"\"\r\n    duration.value=\"\"\r\n    rate.value=\"\"\r\n    poster.value=\"\"\r\n\r\n    const checkboxes = document.querySelectorAll('input[name=\"genre[]\"]')\r\n    for (const item of checkboxes){\r\n        item.checked = false;\r\n        item.classList.remove(\"selected\")\r\n    }\r\n}\r\n\r\nbtnSubmint.addEventListener(\"click\",handlerSubmit)\r\nbtnCleaner.addEventListener(\"click\",cleanInputs)\n\n//# sourceURL=webpack://front/./scripts/createMovie.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/createMovie.js"]();
/******/ 	
/******/ })()
;