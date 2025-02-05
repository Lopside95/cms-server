"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.role = exports.condition = exports.shelter = exports.food = exports.animal = exports.item = void 0;
const zod_1 = __importDefault(require("zod"));
const item = zod_1.default.object({
    id: zod_1.default.number(),
    item_name: zod_1.default.string(),
    quantity: zod_1.default.number(),
    created_at: zod_1.default.date(),
    updated_at: zod_1.default.date(),
});
exports.item = item;
const animal = zod_1.default.object({
    id: zod_1.default.number(),
    name: zod_1.default.string(),
    species: zod_1.default.string(),
    age: zod_1.default.number(),
    chip_number: zod_1.default.string(),
    shelter_id: zod_1.default.number(),
    created_at: zod_1.default.date(),
    updated_at: zod_1.default.date(),
    breed: zod_1.default.string(),
});
exports.animal = animal;
const food = zod_1.default.object({
    id: zod_1.default.number(),
    name: zod_1.default.string(),
    quantity: zod_1.default.number(),
    created_at: zod_1.default.date(),
    updated_at: zod_1.default.date(),
    shelter_id: zod_1.default.number(),
});
exports.food = food;
const shelter = zod_1.default.object({
    id: zod_1.default.number(),
    name: zod_1.default.string(),
    location: zod_1.default.string(),
    created_at: zod_1.default.date(),
    updated_at: zod_1.default.date(),
    phone: zod_1.default.string(),
    email: zod_1.default.string(),
    longitude: zod_1.default.number(),
    latitude: zod_1.default.number(),
    animals: zod_1.default.array(animal),
    foods: zod_1.default.array(food),
});
exports.shelter = shelter;
const condition = zod_1.default.enum(["HEALTHY", "SICK", "INJURED", "DISABLED"]);
exports.condition = condition;
const role = zod_1.default.enum(["USER", "ADMIN"]);
exports.role = role;
