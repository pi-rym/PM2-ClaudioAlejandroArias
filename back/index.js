const app = require("./src/app")
const conDB = require("./src/config/conDB")
require("dotenv").config();
//const PORT = 3000;

const{ PORT } = process.env;

conDB()
.then((res)=>{
    app.listen(PORT, ()=> {
        console.log(`server is listening on port ${PORT}`)
    });
})
.catch((err)=> {
    console.error("Error al conectar la base de datos " + err.message)
});




