
import { createPool } from "mysql2/promise";

import { DB_NAME, DB_USER, DB_HOST, DB_PASSWORD } from "./config.js";

export const pool = createPool({
  database: DB_NAME,
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});
