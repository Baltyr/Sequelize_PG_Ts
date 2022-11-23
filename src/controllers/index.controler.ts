import { Request, Response } from "express";
import { parse } from "path";
import { QueryResult } from "pg";
import { receiveMessageOnPort } from "worker_threads";

//pool es la conexion
import { pool } from "../database";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query("SELECT * FROM users");
    // muestra el arreglo en web
    return res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json("internal server error");
  }
};

export const getUserbyId = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query(
      "SELECT * FROM users WHERE id = $1",
      [id]
    );
    return res.json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("internal server error");
  }
};
// actualizar o crear datos sensibles
export const creatUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, email } = req.body;
  const response: QueryResult = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1,$2)",
    [name, email]
  );
  return res.json({
    Message: "usuario creado satisfactoriamente",
    body: {
      user: {
        name,
        email,
      },
    },
  });
};

// actualizar
export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [
    name,
    email,
    id,
  ]);
  return res.json(`el usuario ${id} se actulizo de forma correctamente `);
};

// Borrar
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);
  await pool.query("DELETE FROM users WHERE id = $1", [id]);
  return res.json(`el usuario ${id} fue borrado con exito`);
};
