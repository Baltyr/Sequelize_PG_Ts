"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// enrrutado 
router.get('/test', (req, res) => res.send("conexion exitosa"));
exports.default = router;