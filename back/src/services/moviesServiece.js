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
    }
};