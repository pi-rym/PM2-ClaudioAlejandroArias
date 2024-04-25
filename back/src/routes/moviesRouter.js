const { Router } = require("express")
const { moviesController , createMovie} = require("../controllers/moviesConstoller")
const validateMovie = require("../middleweres/validateMovie")
const moviesRouter = Router();

moviesRouter.get("/", moviesController)
moviesRouter.post("/", validateMovie ,createMovie)

module.exports  = {moviesRouter}