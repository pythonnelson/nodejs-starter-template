import express, { Application, NextFunction, Request, Response } from "express";
import productRoutes from "./routes/productRoutes";

const app: Application = express();

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

app.use(express.json());
app.use("/api/products", productRoutes);

export default app;
