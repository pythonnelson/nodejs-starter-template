
import express from "express";
import { getAllVisas } from "../controllers/visaApplicaitonAdmin";

const adminRouter = express.Router();

adminRouter.get("/visas", getAllVisas);

export default adminRouter;
