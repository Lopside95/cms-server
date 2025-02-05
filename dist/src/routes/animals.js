"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const animals_controller_1 = require("../controllers/animals-controller");
const router = (0, express_1.Router)();
router.get("/", animals_controller_1.getAnimals);
exports.default = router;
