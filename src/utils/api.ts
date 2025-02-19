import { Animal, Food, Item, Shelter } from "@prisma/client";
import { prisma } from "..";
import { animal, food, item, shelter } from "./types";

// interface Model {
// item: Item;
// animal: Animal;
// food: Food;
// shelter: Shelter;

// }

type Model = Item | Animal | Food | Shelter;

// export interface Create<T> {
//     route: Route;
//     data: T;
//   }
//   export interface Update<T> {
//     route: Route;
//     data: T;
//     id: number | undefined;
//   }

const allModels = [item, animal, food, shelter];

interface GetById<T> {
  id: number;
  model: T;
}

interface GetModel<T> {
  id: number;
  model: T;
}

const getModel = (input: string) => {
  switch (input) {
    case "item":
      return item;
    case "animal":
      return animal;
    case "food":
      return food;
    case "shelter":
      return shelter;
    default:
      return null;
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

// const getModel = (model: string) => {

// }

// const getById = async <T>({id, model}: GetById<T>) => {

// try {
//   const fetched =
// } catch (error) {
//   console.error(error);
// }

// }
