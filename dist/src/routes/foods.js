"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const foods_controller_1 = require("../controllers/foods-controller");
const router = (0, express_1.Router)();
router.get("/", foods_controller_1.getFoods);
exports.default = router;
