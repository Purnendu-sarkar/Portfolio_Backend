import express from "express";
import { ProjectController } from "./project.controller";
import { auth } from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { createProjectSchema } from "./project.validation";

const router = express.Router();

router.get("/", ProjectController.getAllProjects);
router.post("/", auth, validateRequest(createProjectSchema), ProjectController.createProject);


export const ProjectRoutes = router;