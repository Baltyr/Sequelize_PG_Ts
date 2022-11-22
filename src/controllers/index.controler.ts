import { Request, Response } from "express";
import { parse } from "path";
import { QueryResult } from "pg";
import { receiveMessageOnPort } from "worker_threads";
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
    const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.json(response.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json("internal server error");
  }
};

/* export const creatIser = (req :Request,res:Response): Response<Promise> => {
    
}

export const updateUser = (req :Request,res:Response): Response<Promise> => {
    
}

export const deleteUser = (req :Request,res:Response): Response<Promise> => {
    
}
 */
