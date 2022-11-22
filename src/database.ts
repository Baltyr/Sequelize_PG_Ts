import { Pool} from 'pg'

// conexion con la base de datos
export const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    password: "1234",
    database: "sequelizeTS",
    port: 5432
})