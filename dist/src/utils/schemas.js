"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const itemSchema = zod_1.default.object({
    // id: z.number(),
    item_name: zod_1.default.string(),
    quantity: zod_1.default.number(),
});
