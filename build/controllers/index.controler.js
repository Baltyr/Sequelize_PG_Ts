"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.creatUser = exports.getUserbyId = exports.getUsers = void 0;
//pool es la conexion
const database_1 = require("../database");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM users");
        // muestra el arreglo en web
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json("internal server error");
    }
});
exports.getUsers = getUsers;
const getUserbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query("SELECT * FROM users WHERE id = $1", [id]);
        return res.json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("internal server error");
    }
});
exports.getUserbyId = getUserbyId;
// actualizar o crear datos sensibles
const creatUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const response = yield database_1.pool.query("INSERT INTO users (name, email) VALUES ($1,$2)", [name, email]);
    return res.json({
        Message: "usuario creado satisfactoriamente",
        body: {
            user: {
                name,
                email,
            },
        },
    });
});
exports.creatUser = creatUser;
// actualizar
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    yield database_1.pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [
        name,
        email,
        id,
    ]);
    return res.json(`el usuario ${id} se actulizo de correctamente `);
});
exports.updateUser = updateUser;
// Borrar
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    yield database_1.pool.query("DELETE FROM users WHERE id = $1", [id]);
    return res.json(`el usuario ${id} fue borrado con exito`);
});
exports.deleteUser = deleteUser;
