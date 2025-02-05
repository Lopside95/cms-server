"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shelters_controller_1 = require("../controllers/shelters-controller");
const router = (0, express_1.Router)();
router.get("/", shelters_controller_1.getShelters);
router.post("/", shelters_controller_1.createShelter);
exports.default = router;
