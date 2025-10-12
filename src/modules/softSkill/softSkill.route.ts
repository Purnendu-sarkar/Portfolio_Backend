
import express from "express";
import { SoftSkillController } from "./softSkill.controller";
import { auth } from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { createSoftSkillSchema, updateSoftSkillSchema } from "./softSkill.validation";

const router = express.Router();

router.get("/", SoftSkillController.getAllSoftSkills);
router.get("/:id", SoftSkillController.getSingleSoftSkill);

router.post("/",
    auth,
    validateRequest(createSoftSkillSchema),
    SoftSkillController.createSoftSkill);

router.patch("/:id",
    auth,
    validateRequest(updateSoftSkillSchema),
    SoftSkillController.updateSoftSkill);

router.delete("/:id", auth, SoftSkillController.deleteSoftSkill);


export const SoftSkillRoutes = router;