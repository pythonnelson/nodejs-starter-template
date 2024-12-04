import { Request, Response } from "express";
import { db } from "../db/db";

export const getAllVisas = async (req: Request, res: Response) => {
    try {
      const allVisas = await db.visaApplication.findMany();
      res.status(200).json(allVisas);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch visas" });
    }
  };
  
  export const deleteVisa = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await db.visaApplication.delete({
        where: { id },
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete visa" });
    }
  };