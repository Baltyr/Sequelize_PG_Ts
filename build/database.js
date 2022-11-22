"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
// conexion con la base de datos
exports.pool = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    password: "1234",
    database: "sequelizeTS",
    port: 5432
});
