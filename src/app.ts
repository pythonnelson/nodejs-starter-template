import express, { Application } from "express";
import helloRoute from "./routes/helloRoute";

const app: Application = express();

app.use(express.json());
app.use("/api", helloRoute);

export default app;
