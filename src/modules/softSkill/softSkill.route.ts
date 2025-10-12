
import express from "express";
import { SoftSkillController } from "./softSkill.controller";
import { auth } from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { createSoftSkillSchema, updateSoftSkillSchema } from "./softSkill.validation";

const router = express.Router();

router.post("/",
    auth,
    validateRequest(createSoftSkillSchema),
    SoftSkillController.createSoftSkill);


export const SoftSkillRoutes = router;