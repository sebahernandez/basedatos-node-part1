import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const config = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  allowExitOnIdle: true,
};

const pool = new Pool(config);

const db = async (query, values) => {
  try {
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.error("[db_connect] => db:", error);
    const newError = { status: false, message: error };
    throw newError;
  }
};

export default db;
