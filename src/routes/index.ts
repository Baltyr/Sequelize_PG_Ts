import { Router } from "express";
const router = Router()


// enrrutado 
router.get('/test', (req, res)=> res.send ("conexion exitosa"))

export default router;