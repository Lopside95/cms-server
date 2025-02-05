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
exports.deleteItem = exports.getItemById = exports.updateItem = exports.addItem = exports.getItems = void 0;
const __1 = require("..");
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield __1.prisma.item.findMany();
        res.status(200).json(items);
    }
    catch (error) {
        console.error(error);
    }
});
exports.getItems = getItems;
const getItemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const item = yield __1.prisma.item.findUnique({
            where: {
                id: id,
            },
        });
        res.status(200).json(item);
    }
    catch (error) {
        console.error(error);
    }
});
exports.getItemById = getItemById;
const addItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newItem = yield __1.prisma.item.create({
            data: {
                item_name: req.body.itemName,
                quantity: req.body.quantity,
            },
        });
        res.status(201).json(newItem);
    }
    catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ error: "Something went wrong" + error });
    }
});
exports.addItem = addItem;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedItem = yield __1.prisma.item.update({
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" + error });
    }
});
exports.updateItem = updateItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        yield __1.prisma.item.delete({
            where: {
                id: id,
            },
        });
        res.status(204).json({ message: "Item deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Couldn't delete item" + error });
        console.error(error);
    }
});
exports.deleteItem = deleteItem;
