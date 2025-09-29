import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { BlogRoutes } from "../modules/blog/blog.route";

export const router = Router();

router.use("/auth", AuthRoutes);
router.use("/blogs", BlogRoutes);
