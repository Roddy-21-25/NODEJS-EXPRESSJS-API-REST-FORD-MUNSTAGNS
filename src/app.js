import express from "express";
import cors from "cors";
import carsRoutes from "./routes/cars.routes.js";

const app = express();
app.use(cors());

//? Middleware para interpretar los datos que llegan por el body
app.use(express.json());

app.use("/api", carsRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint Not Found",
  });
});

export default app;
