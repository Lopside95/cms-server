import { Item, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { ItemSchema } from "../utils/schemas";
import { prisma } from "..";
import { Animal } from "../utils/types";

const getAnimals = async (req: Request, res: Response) => {
  try {
    const animals = await prisma.animal.findMany();

    res.status(200).json(animals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error fetching animals" });
  }
};

export { getAnimals };
