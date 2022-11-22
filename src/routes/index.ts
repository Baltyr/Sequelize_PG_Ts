import { Router } from "express";
const router = Router();
import { getUsers,getUserbyId, } from "../controllers/index.controler";

// enrrutado
// router.get("/test", (req, res) => res.send("conexion exitosa"));

router.get("/users", getUsers);
router.get("/users/:id", getUsers);
router.put("/users", getUsers);
router.post("/users", getUsers);
router.delete("/users", getUsers);

export default router;
