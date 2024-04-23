const mongoose = require ("mongoose")
require("dotenv").config();

const {MONGO_URI} = process.env

const conDB = async () => {
    await mongoose.connect(`${MONGO_URI}`)
    //console.log(process.env.MONGO_URI);
}

module.exports = conDB;