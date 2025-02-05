"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShelterById = exports.createShelter = exports.getShelters = void 0;
const __1 = require("..");
const getShelters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shelters = yield __1.prisma.shelter.findMany();
        res.status(200).json(shelters);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "error fetching shelters" });
    }
});
exports.getShelters = getShelters;
const getShelterById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shelter = yield __1.prisma.shelter.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        res.status(200).json(shelter);
    }
    catch (error) {
        console.error(error);
    }
});
exports.getShelterById = getShelterById;
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
const createShelter = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newShelter = yield __1.prisma.shelter.create({
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
    }
    catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ error: "Something went wrong" + error });
    }
});
exports.createShelter = createShelter;
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
