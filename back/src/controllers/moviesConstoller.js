const { getMoviesService, postMovieService } = require ("../services/moviesServiece")//

const moviesController = async (req, res)=>{
    const movies = await getMoviesService()
    res.status(200).send(movies);
}

// const createFilm = async (req, res) => {
//     try {
//         const {title, year, director, duration, genre, rate, poster} = req.body;
//         await createMovie(title, year, director, duration, genre, rate, poster);
//     } catch (error) {
//         console.log("Error al recir datos del formulario del front" + error);
//     }
    
// }//

const createMovie = async (req, res) => {
    const {body}= req;
    try {
        await postMovieService(body)
        res.status(201).json({message: "la pelicula se ha creado correctamente"})
    } catch (error) {
        res.status(500).json({error:"Error al recir datos del formulario del front(error interno en el servidor)"});
    }
    
}//


module.exports = {
    moviesController,
    createMovie
};//