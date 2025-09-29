import express from "express";
import { ProjectController } from "./project.controller";
import { auth } from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { createProjectSchema, updateProjectSchema } from "./project.validation";

const router = express.Router();

router.get("/", ProjectController.getAllProjects);
router.get("/:id", ProjectController.getProjectById);
router.post("/", auth, validateRequest(createProjectSchema), ProjectController.createProject);
router.patch("/:id", auth, validateRequest(updateProjectSchema), ProjectController.updateProject);
router.delete("/:id", auth, ProjectController.deleteProject);





export const ProjectRoutes = router;