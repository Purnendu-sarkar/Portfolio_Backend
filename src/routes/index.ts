import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";

export const router = Router();

router.use("/auth", AuthRoutes);
