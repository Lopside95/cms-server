import { Item, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { ItemSchema } from "../utils/schemas";
import { prisma } from "..";
import { Food } from "../utils/types";

const getFoods = async (req: Request, res: Response) => {
  try {
    const foods = await prisma.food.findMany();

    res.status(200).json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error fetching foods" });
  }
};

export { getFoods };
