import express from "express";
import { TechController } from "./tech.controller";
import { auth } from "../../middlewares/auth";
import { upload } from "../../middlewares/upload";
import { validateRequest } from "../../middlewares/validateRequest";
import { createTechSchema, updateTechSchema } from "./tech.validation";

const router = express.Router();

router.get("/", TechController.getAllTechs);

router.get("/:id", TechController.getSingleTech);

router.post(
  "/",
  auth,
  upload.single("image"),
  validateRequest(createTechSchema),
  TechController.createTech
);

router.patch(
  "/:id",
  auth,
  upload.single("image"),
  validateRequest(updateTechSchema),
  TechController.updateTech
);



export const TechRoutes = router;
