"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
// export interface Create<T> {
//     route: Route;
//     data: T;
//   }
//   export interface Update<T> {
//     route: Route;
//     data: T;
//     id: number | undefined;
//   }
const allModels = [types_1.item, types_1.animal, types_1.food, types_1.shelter];
const getModel = (input) => {
    switch (input) {
        case "item":
            return types_1.item;
        case "animal":
            return types_1.animal;
        case "food":
            return types_1.food;
        case "shelter":
            return types_1.shelter;
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
