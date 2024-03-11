const URL = "https://students-api.2.us-1.fl0.io/movies"
const renderFilms = require("./renderFilms")

const getFilms = () => {
  $.get(URL, (data)=>data.forEach(renderFilms))
}

module.export = getFilms;
