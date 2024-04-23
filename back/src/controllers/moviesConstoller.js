const { getMoviesService } = require ("../services/moviesServiece")

const moviesController = async (req, res)=>{
    const movies = await getMoviesService()
    res.status(200).send(movies);
}

module.exports = moviesController;