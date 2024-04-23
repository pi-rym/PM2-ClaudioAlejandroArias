const { Schema, model } = require("mongoose")

const movieShema = new Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: Number,
    poster: String
})

const Movie = model("Movie", movieShema)
//console.log(Movie);

module.exports= Movie;