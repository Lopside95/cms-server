"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const foods_1 = __importDefault(require("./routes/foods"));
const shelters_1 = __importDefault(require("./routes/shelters"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const items_1 = __importDefault(require("./routes/items"));
const animals_1 = __importDefault(require("./routes/animals"));
exports.prisma = new client_1.PrismaClient();
exports.app = (0, express_1.default)();
const port = process.env.PORT || 8000;
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use("/items", items_1.default);
exports.app.use("/foods", foods_1.default);
exports.app.use("/animals", animals_1.default);
exports.app.use("/shelters", shelters_1.default);
exports.app.listen(port, () => {
    console.log("CMS is running on", port);
});
