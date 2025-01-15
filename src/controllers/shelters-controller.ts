import { Item, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { ItemSchema } from "../utils/schemas";
import { prisma } from "..";
import { Shelter } from "../utils/types";

const getShelters = async (req: Request, res: Response) => {
  try {
    const shelters = await prisma.shelter.findMany();

    res.status(200).json(shelters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error fetching shelters" });
  }
};

export { getShelters };
