//routes

const { Router } = require("express")
const { moviesRouter } = require("./moviesRouter")
const { createFilm } = require("../controllers/moviesConstoller")//

const router = Router();

router.use("/movies", moviesRouter)

router.post("/movies/createMovie",createFilm)//

module.exports = router