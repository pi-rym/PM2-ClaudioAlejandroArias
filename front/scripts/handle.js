const URL = "https://students-api.up.railway.app/movies"
const renderFilms = require("./renderFilms.js")
const axios = require ("axios")

// const getFilms = () => {
//   $.get(URL, (data)=>data.forEach(renderFilms))
// }

//Promesas...
// const getFilms = () => {
//   axios.get("https://students-api.up.railway.app/movies")
//   //.then((Response)=> response.data.forEach(renderFilms))
//   .then(({data}) => data.forEach(renderFilms))
//   .catch((error)=> console.log(error.message))
// }

//Async Await
const getFilms = async ()=> {
  try {
      const {data} = await axios.get("https://students-api.up.railway.app/movies")
      data.forEach(renderFilms)
  } catch (error) {
      console.log("Error", error.message)
  }
}

module.export = getFilms;
