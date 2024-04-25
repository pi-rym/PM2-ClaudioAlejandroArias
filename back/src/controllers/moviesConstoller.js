const { getMoviesService, createMovie } = require ("../services/moviesServiece")//

const moviesController = async (req, res)=>{
    const movies = await getMoviesService()
    res.status(200).send(movies);
}

const createFilm = async (req, res) => {
    try {
        const {title, year, director, duration, genre, rate, poster} = req.body;
        await createMovie(title, year, director, duration, genre, rate, poster);
    } catch (error) {
        console.log("Error al recir datos del formulario del front" + error);
    }
    
}//

module.exports = {moviesController, createFilm};//