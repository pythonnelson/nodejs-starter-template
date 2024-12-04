import express from "express";
import cors from "cors";
import visaRouter from "./routes/visaApplication";
import adminRouter from "./routes/admin";
import consularRouter from "./routes/consular";

require("dotenv").config();
const app = express();

app.use(cors());

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use((req, res, next) => {
  next();
});
app.use("/api/v1", visaRouter);
app.use("/api/v1", consularRouter);
app.use("/api/v1", adminRouter);
