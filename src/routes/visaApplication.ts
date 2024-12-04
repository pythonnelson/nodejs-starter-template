
import express from "express";
import { asyncWrapper } from "../utils/asyncWrapper";
import { getApplicationById, onBoarding } from "../controllers/visaApplication";

const visaRouter = express.Router();

visaRouter.post("/visas", asyncWrapper(onBoarding)),
visaRouter.get("/visas/:applicationId", asyncWrapper(getApplicationById));

export default visaRouter;
