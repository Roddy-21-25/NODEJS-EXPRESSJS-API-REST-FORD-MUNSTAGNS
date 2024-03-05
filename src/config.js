//? Esto es para leer las variables de entorno.
import { config } from "dotenv";

config();
//? process.env.NAME-DE-LA-ENV = Asi es como se leen las env

export const PORT = process.env.PORT || 3000;
export const DB_NAME = process.env.DB_NAME || "fordmunstangsdb";
export const DB_USER = process.env.DB_USER || "b9yarsdikp4t7i0j4fy8";
export const DB_HOST = process.env.DB_HOST || "us-east.connect.psdb.cloud";
export const DB_PASSWORD = process.env.DB_PASSWORD || "pscale_pw_Sa1UNr2wR0DcbZ1k45Ky3PYa6LbbWlLhJ9RkG74NXXu";
export const DB_PORT = process.env.DB_PORT;
