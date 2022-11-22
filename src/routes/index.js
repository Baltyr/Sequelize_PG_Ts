"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = (0, express_1.Router)();
// enrrutado 
router.get('/test', function (req, res) { return res.send("conexion exitosa"); });
exports["default"] = router;
