const Movies = require("../utils/classMovies")
const Movie = require("../models/Movie")


module.exports = {
    getMoviesService : async () => {
        try {
            const movies = await Movie.find()
            return movies;
        } catch (error) {
            throw error.message;
        }
    },

    // createMovie : async () => {
    //     try {
    //         const movie = await Movie.create();
    //         return movie;
    //     } catch (error) {
    //         console.log("No se ha recibido datos en el moviesServiece para crear la movie");
    //         throw error.message;
    //     }
    // }//

    postMovieService: async (movie)=> {
        try {
            await Movie.create(movie)
        } catch (error) {
            throw error.message
        }
    }
};