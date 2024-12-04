import { Request, Response } from "express";
import { db } from "../db/db";

export const getVisaByPassportNumber = async (req: Request, res: Response) => {
    const { passportNumber } = req.params;
    try {
      const visa = await db.visaApplication.findMany({
        where: { passportNumber },
      });
      if (!visa) return res.status(404).json({ error: "No application (s) found for this passport number" });
      res.status(200).json(visa);
    } catch (error) {
        console.log("Failed to fetch visa application ", error)
      res.status(500).json({ error: "Failed to fetch Visa application" });
    }
};

// TODO: Can't get visa application by the id
export const getVisaByApplicationId = async (req: Request, res: Response): Promise<void> => {
  const { applicationId } = req.params;

  if (!applicationId) {
      res.status(400).json({ error: "Application ID is required" });
      return;
  }

  try {
      console.log("Searching for application with ID:", applicationId);  // Log the applicationId to verify

      // Ensure the applicationId is of the correct type (assuming it's a string in the database)
      const visaApplicationById = await db.visaApplication.findUnique({
          where: { applicationId: applicationId as string }, // Type assertion for string
      });

      console.log("Found visa application:", visaApplicationById);  // Log the result of the query

      if (!visaApplicationById) {
          res.status(404).json({ error: "No application found for this application ID" });
          return;
      }

      res.status(200).json(visaApplicationById);
  } catch (error) {
      console.error("Failed to fetch visa application: ", error);
      res.status(500).json({ error: "Failed to fetch Visa application" });
  }
};

export const getVisaByPhoneNumber = async (req: Request, res: Response) => {
    const { phoneNumber } = req.params;
    console.log("Received applicationId:", phoneNumber);
    try {
      const visa = await db.visaApplication.findFirst({
        where: { phoneNumber },
      });
      if (!visa) return res.status(404).json({ error: "No application (s) found for this application id" });
      console.log("Processed applicationId:", phoneNumber);
      res.status(200).json(visa);
    } catch (error) {
        console.log("Failed to fetch visa application ", error)
      res.status(500).json({ error: "Failed to fetch Visa application" });
    }
};