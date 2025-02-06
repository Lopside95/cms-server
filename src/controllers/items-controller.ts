import { Item, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { ItemSchema } from "../utils/schemas";
import { prisma } from "..";
import { prismaAdd, getById } from "../utils/helpers";

const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const items: Item[] = await prisma.item.findMany();

    res.status(200).json(items);
  } catch (error) {
    console.error(error);
  }
};

const getItemById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const item = await getById.item.findUnique({
      where: { id: id },
    });

    res.status(200).json(item);
    // const item = await getById.item.findUnique({
    //   where: {id: req.params.id}
    // })
  } catch (error) {
    console.error(error);
  }
};

// const getItemById = async (req: Request, res: Response) => {
//   try {
//     const id = Number(req.params.id);

//     const item = await prisma.item.findUnique({
//       where: {
//         id: id,
//       },
//     });

//     res.status(200).json(item);
//   } catch (error) {
//     console.error(error);
//   }
// };

const addItem = async (req: Request, res: Response, next?: NextFunction) => {
  const data = {
    item_name: req.body.itemName,
    quantity: req.body.quantity,
  };

  console.log("data", data);

  try {
    const newItem = await prismaAdd.item.add({ data });

    res.status(200).json(newItem);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error creating item is: " + (error as Error).message });
  }
};

// const addItem = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   try {
//     const newItem: Item = await prisma.item.create({
//       data: {
//         item_name: req.body.itemName,
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

const updateItem = async (req: Request, res: Response) => {
  try {
    const updatedItem: Item = await prisma.item.update({
      where: {
        id: Number(req.body.id),
      },
      data: {
        id: Number(req.body.id),
        item_name: req.body.itemName,
        quantity: req.body.quantity,
        created_at: req.body.createdAt,
        updated_at: new Date(),
      },
    });

    res.status(200).json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" + error });
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await prisma.item.delete({
      where: {
        id: id,
      },
    });

    res.status(204).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Couldn't delete item" + error });
    console.error(error);
  }
};

export { getItems, addItem, updateItem, getItemById, deleteItem };
