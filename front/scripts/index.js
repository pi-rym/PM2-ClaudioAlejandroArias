const URL = "https://students-api.2.us-1.fl0.io/movies"

// ? Crear la estructura de datos

class Movie {
  constructor(title, year, director, duration, genre, rate, poster) {
    
    this.title = title;
    this.year=year;
    this.director=director;
    this.duration=duration;
    this.genre=genre;
    this.rate=rate;
    this.poster=poster;
  }
}

class Repository {
  constructor() {
    this.movies = [];
  }

  createMovie({title, year, director, duration, genre, rate, poster }) {
    
    
    const newMovie = new Movie(title, year, director, duration, genre, rate, poster);
    this.movies.push(newMovie);
  }

  getAllMovies() {
    return this.movies;
  }
}

// ? Interactuar con el DOM y la estructura de datos que creamos

const repo = new Repository();
// * Mapear Movies

const mapMovies = (movie) => {
    const cardMovie = document.createElement("div");
    cardMovie.classList.add("cardMovie");
    cardMovie.innerHTML = `<img src="${movie.poster}">
    <h3>${movie.title} (${movie.year})</h3>
    <p><strong>Director: </strong>${movie.director}</p>
    <p><strong>Genero: </strong>${movie.genre.join(", ")}</p>
    <p><strong>Rate: </strong>${movie.rate}</p>`;
  
    // cardMovie.style.border = "solid 1px #3A3335";
    // cardMovie.style.width = "200px";
    // cardMovie.style.margin = "1em";
    // cardMovie.style.paddingLeft = "1em";
  
    return cardMovie;
  };
// * Renderizando Movies

const renderMovies = () => {
    
    const films = document.getElementById("films");
    films.innerHTML = "";
    const movies = repo.getAllMovies();
    const allMovies = movies.map(mapMovies);
    allMovies.forEach((card) => films.appendChild(card));
  };
// * Creamos la Movie en nuestra estructura de datos

const getMovies = (data) => {
    data.map(movie=>repo.createMovie(movie))
    renderMovies();
  };

  // * Hacemos una solicitud HTTP de tipo GET para obtener las Movies

const addMovie = () => {
    $.get(URL, getMovies);
  };

addMovie();
//----------------------------------

// const filmsSection = document.getElementById("films")

// $.get(URL, (data)=>data.forEach(renderFilms))

// const renderFilms = (movie) => {
//     const movieElement = document.createElement("article")
//     const containerMovie = document.createElement("div")
//     containerMovie.classList.add("divMovie")
//     movieElement.innerHTML=`<img src="${movie.poster}" alt=${movie.title}>`
//     containerMovie.innerHTML=`<h3>${movie.title} (${movie.year})</h3>
//     <p><strong>Director: </strong>${movie.director}</p>
//     <p><strong>Genero: </strong>${movie.genre.join(", ")}</p>
//     <p><strong>Rate: </strong>${movie.rate}</p>`
//     filmsSection.appendChild(movieElement)
//     movieElement.appendChild(containerMovie)
// }
