// importamos express
import express from "express";
// ejecutamos express
const app = express();

import indexRoutes from "./routes/index"
app.use(indexRoutes)

//conexion con base de datos 
app.listen(3000 , () =>{
    console.log("server en el puerto 3000")
})