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

/***/ "./scripts/handle.js":
/*!***************************!*\
  !*** ./scripts/handle.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nconst URL = \"https://students-api.up.railway.app/movies\"\r\nconst renderFilms = __webpack_require__(/*! ./renderFilms.js */ \"./scripts/renderFilms.js\")\r\n\r\nconst getFilms = () => {\r\n  $.get(URL, (data)=>data.forEach(renderFilms))\r\n}\r\n\r\nmodule.export = getFilms;\r\n\n\n//# sourceURL=webpack://front/./scripts/handle.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const getFilms = __webpack_require__ (/*! ./handle.js */ \"./scripts/handle.js\")\r\n\r\ngetFilms();\r\n\r\n//------------------------------------------------\r\n// const URL = \"https://students-api.2.us-1.fl0.io/movies\"\r\n\r\n// // ? Crear la estructura de datos\r\n\r\n// class Movie {\r\n//   constructor(title, year, director, duration, genre, rate, poster) {\r\n    \r\n//     this.title = title;\r\n//     this.year=year;\r\n//     this.director=director;\r\n//     this.duration=duration;\r\n//     this.genre=genre;\r\n//     this.rate=rate;\r\n//     this.poster=poster;\r\n//   }\r\n// }\r\n\r\n// class Repository {\r\n//   constructor() {\r\n//     this.movies = [];\r\n//   }\r\n\r\n//   createMovie({title, year, director, duration, genre, rate, poster }) {\r\n    \r\n    \r\n//     const newMovie = new Movie(title, year, director, duration, genre, rate, poster);\r\n//     this.movies.push(newMovie);\r\n//   }\r\n\r\n//   getAllMovies() {\r\n//     return this.movies;\r\n//   }\r\n// }\r\n\r\n// // ? Interactuar con el DOM y la estructura de datos que creamos\r\n\r\n// const repo = new Repository();\r\n// // * Mapear Movies\r\n\r\n// const mapMovies = (movie) => {\r\n//     const cardMovie = document.createElement(\"div\");\r\n//     cardMovie.classList.add(\"cardMovie\");\r\n//     cardMovie.innerHTML = `<img src=\"${movie.poster}\">\r\n//     <h3>${movie.title} (${movie.year})</h3>\r\n//     <p><strong>Director: </strong>${movie.director}</p>\r\n//     <p><strong>Genero: </strong>${movie.genre.join(\", \")}</p>\r\n//     <p><strong>Rate: </strong>${movie.rate}</p>`;\r\n  \r\n//     // cardMovie.style.border = \"solid 1px #3A3335\";\r\n//     // cardMovie.style.width = \"200px\";\r\n//     // cardMovie.style.margin = \"1em\";\r\n//     // cardMovie.style.paddingLeft = \"1em\";\r\n  \r\n//     return cardMovie;\r\n//   };\r\n// // * Renderizando Movies\r\n\r\n// const renderMovies = () => {\r\n    \r\n//     const films = document.getElementById(\"films\");\r\n//     films.innerHTML = \"\";\r\n//     const movies = repo.getAllMovies();\r\n//     const allMovies = movies.map(mapMovies);\r\n//     allMovies.forEach((card) => films.appendChild(card));\r\n//   };\r\n// // * Creamos la Movie en nuestra estructura de datos\r\n\r\n// const getMovies = (data) => {\r\n//     data.map(movie=>repo.createMovie(movie))\r\n//     renderMovies();\r\n//   };\r\n\r\n//   // * Hacemos una solicitud HTTP de tipo GET para obtener las Movies\r\n\r\n// const addMovie = () => {\r\n//     $.get(URL, getMovies);\r\n//   };\r\n//----------------------------------\r\n\r\n// const filmsSection = document.getElementById(\"films\")\r\n\r\n// $.get(URL, (data)=>data.forEach(renderFilms))\r\n\r\n// const renderFilms = (movie) => {\r\n//     const movieElement = document.createElement(\"article\")\r\n//     const containerMovie = document.createElement(\"div\")\r\n//     containerMovie.classList.add(\"divMovie\")\r\n//     movieElement.innerHTML=`<img src=\"${movie.poster}\" alt=${movie.title}>`\r\n//     containerMovie.innerHTML=`<h3>${movie.title} (${movie.year})</h3>\r\n//     <p><strong>Director: </strong>${movie.director}</p>\r\n//     <p><strong>Genero: </strong>${movie.genre.join(\", \")}</p>\r\n//     <p><strong>Rate: </strong>${movie.rate}</p>`\r\n//     filmsSection.appendChild(movieElement)\r\n//     movieElement.appendChild(containerMovie)\r\n// }\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderFilms.js":
/*!********************************!*\
  !*** ./scripts/renderFilms.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nconst filmsSection = document.getElementById(\"films\")\r\n\r\nconst renderFilms = (movie) => {\r\n      const movieElement = document.createElement(\"article\")\r\n      const containerMovie = document.createElement(\"div\")\r\n      containerMovie.classList.add(\"divMovie\")\r\n      movieElement.innerHTML=`<img src=\"${movie.poster}\" alt=${movie.title}>`\r\n      containerMovie.innerHTML=`<h3>${movie.title} (${movie.year})</h3>\r\n      <p><strong>Director: </strong>${movie.director}</p>\r\n      <p><strong>Genero: </strong>${movie.genre.join(\", \")}</p>\r\n      <p><strong>Rate: </strong>${movie.rate}</p>`\r\n      filmsSection.appendChild(movieElement)\r\n      movieElement.appendChild(containerMovie)\r\n  }\r\n\r\nmodule.export =renderFilms;\n\n//# sourceURL=webpack://front/./scripts/renderFilms.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;