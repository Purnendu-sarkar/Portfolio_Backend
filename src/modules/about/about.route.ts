import express from "express";
import { AboutController } from "./about.controller";
import { auth } from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { createAboutSchema, updateAboutSchema } from "./about.validation";
import { upload } from "../../middlewares/upload";

const router = express.Router();

router.get("/", AboutController.getAbout);
router.post(
    "/",
    auth,
    upload.single("profilePic"),
    validateRequest(createAboutSchema),
    AboutController.createAbout
);
router.patch(
    "/:id",
    auth,
    upload.single("profilePic"),
    validateRequest(updateAboutSchema),
    AboutController.updateAbout
);
router.delete("/:id", auth, AboutController.deleteAbout);

export const AboutRoutes = router;
