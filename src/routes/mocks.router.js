import { Router } from "express";
const router = Router();

import mocksController from "../controllers/mocks.controller";

router.get("/mockingpets", mocksController.getMockingPets);

router.get ("/mockingusers" , mocksController.getMockingPets);

export default router;