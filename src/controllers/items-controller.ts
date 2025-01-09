import { Item, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { ItemSchema } from "../utils/schemas";

export const prisma = new PrismaClient();

const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json({ message: "Hello from the items route" });
  } catch (error) {
    console.error(error);
  }
};

const addItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newItem: Item = await prisma.item.create({
      data: {
        name: req.body.name,
        quantity: req.body.quantity,
      },
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    next(error);
    res.status(500).json({ error: "Something went wrong" + error });
  }
};

export { getItems, addItem };
