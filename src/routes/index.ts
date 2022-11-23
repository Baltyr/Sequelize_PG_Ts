import { Router } from "express";
const router = Router();
import {
  getUsers,
  getUserbyId,
  creatUser,
  deleteUser,
  updateUser,
} from "../controllers/index.controler";

// enrrutado
// router.get("/test", (req, res) => res.send("conexion exitosa"));

//get
router.get("/users", getUsers);
router.get("/users/:id", getUserbyId);
//post
router.post("/users", creatUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
