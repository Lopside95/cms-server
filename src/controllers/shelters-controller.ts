import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { ItemSchema } from "../utils/schemas";
import { prisma } from "..";
import { Shelter } from "@prisma/client";

const getShelters = async (req: Request, res: Response) => {
  try {
    const shelters = await prisma.shelter.findMany();

    res.status(200).json(shelters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error fetching shelters" });
  }
};

const getShelterById = async (req: Request, res: Response) => {
  try {
    const shelter = await prisma.shelter.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(shelter);
  } catch (error) {
    console.error(error);
  }
};

// const createShelter = async (req: Request, res: Response) => {
//   try {
//     const newShelter: Shelter = await prisma.shelter.create({
//       data: {
//         id
//         name: req.body.name,
//       },
//     });

//     res.status(201).json(newShelter);
//   } catch (error) {
//     console.error(error);
//   }
// }

const createShelter = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newShelter: Shelter = await prisma.shelter.create({
      data: {
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        phone: req.body.phone,
        capacity: req.body.capacity,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        animals: req.body.animals || [],
        foods: req.body.foods || [],
      },
    });

    res.status(201).json(newShelter);
  } catch (error) {
    console.error(error);
    next(error);
    res.status(500).json({ error: "Something went wrong" + error });
  }
};

export { getShelters, createShelter, getShelterById };

// export type Route = "items" | "animals" | "foods" | "shelters";

// interface Create<T> {
//   req: Request;
//   res: Response;
//   route: Route;
//   data: T;
// }

// const addItem = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   try {
//     const newItem: Item = await prisma.item.create({
//       data: {
//         itemName: req.body.itemName,
//         quantity: req.body.quantity,
//       },
//     });

//     res.status(201).json(newItem);
//   } catch (error) {
//     console.error(error);
//     next(error);
//     res.status(500).json({ error: "Something went wrong" + error });
//   }
// };

// export { getShelters };
