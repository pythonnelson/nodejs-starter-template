
import express from "express";
import { asyncWrapper } from "../utils/asyncWrapper";
import { getVisaByApplicationId, getVisaByPassportNumber, getVisaByPhoneNumber } from "../controllers/visaApplicationConsular";

const consularRouter = express.Router();

consularRouter.get("/visas/:passportNumber", asyncWrapper(getVisaByPassportNumber));
consularRouter.get("/visas/:applicationId", asyncWrapper(getVisaByApplicationId));
consularRouter.get("/visas/:phoneNumber", asyncWrapper(getVisaByPhoneNumber));

export default consularRouter;
