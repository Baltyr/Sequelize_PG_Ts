"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importamos express
const express_1 = __importDefault(require("express"));
// importar rutas
const index_1 = __importDefault(require("./routes/index"));
// ejecutamos express
const app = (0, express_1.default)();
//middlewares
//enviar datos en formato json
app.use(express_1.default.json());
//convierte formularios a formato json
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.use(index_1.default);
//conexion con base de datos
app.listen(3000, () => {
    console.log("server en el puerto 3000");
});
