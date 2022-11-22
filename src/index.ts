// importamos express
import express from "express";

// importar rutas
import indexRoutes from "./routes/index";
// ejecutamos express
const app = express();

//middlewares

//enviar datos en formato json
app.use(express.json());
//convierte formularios a formato json
app.use(express.urlencoded({ extended: false }));
// Routes
app.use(indexRoutes);

//conexion con base de datos
app.listen(3000, () => {
  console.log("server en el puerto 3000");
});
