import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { TypedRequestedBody, VisaApplicationProps } from "../types/types";
import { db } from "../db/db";
import { generateVisaId } from "../utils/generateVisaId";

export async function onBoarding(
  req: TypedRequestedBody<VisaApplicationProps>,
  res: Response
) {
  const data = req.body;

  const applicationId = generateVisaId()
  data.applicationId = applicationId; // Add the generated application ID to the data

  try {
    // Check if the application already exists
    const existingApplication = await db.visaApplication.findUnique({
      where: { applicationId },
    });

    if (existingApplication) {
      return res.status(409).json({
        data: null,
        error: `An application with ID ${applicationId} already exists.`,
      });
    }

    // Create the application
    const gettingStarted = await db.visaApplication.create({
      data: data as Prisma.VisaApplicationCreateInput, // Ensure type compatibility
    });

    return res.status(201).json({
      data: gettingStarted,
      error: null,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      data: null,
      error: "Something went wrong",
    });
  }
}

export async function getApplicationById(req: Request, res: Response) {
  const { applicationId } = req.params;
  try {
    const visaApplication = await db.visaApplication.findUnique({
      where: {
        applicationId
      }
    })
    return res.status(200).json(visaApplication)
  } catch (error) {
    console.log(error)
  }
}