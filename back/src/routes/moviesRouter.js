const { Router } = require("express")
const { moviesController } = require("../controllers/moviesConstoller")

const moviesRouter = Router();

moviesRouter.get("/", moviesController)

module.exports  = {moviesRouter}