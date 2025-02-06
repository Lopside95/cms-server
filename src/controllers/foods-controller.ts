import { Food, Item, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { ItemSchema } from "../utils/schemas";
import { prisma } from "..";

const getFoods = async (req: Request, res: Response) => {
  try {
    const foods = await prisma.food.findMany();

    res.status(200).json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error fetching foods" });
  }
};

const createFood = async (req: Request, res: Response) => {
  try {
    const newFood: Food = await prisma.food.create({
      data: {
        name: req.body.name,
        quantity: req.body.quantity,
        shelter_id: req.body.shelter_id,
      },
    });
    res.status(201).json(newFood);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ error: " error creating food " + errorMessage });
    console.error(error);
  }
};

export { getFoods, createFood };
