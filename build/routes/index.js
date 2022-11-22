"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const index_controler_1 = require("../controllers/index.controler");
// enrrutado
// router.get("/test", (req, res) => res.send("conexion exitosa"));
router.get("/users", index_controler_1.getUsers);
router.get("/users/:id", index_controler_1.getUserbyId);
router.put("/users", index_controler_1.getUsers);
router.post("/users", index_controler_1.getUsers);
router.delete("/users", index_controler_1.getUsers);
exports.default = router;
