import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { BlogRoutes } from "../modules/blog/blog.route";
import { ProjectRoutes } from "../modules/project/project.route";
import { AboutRoutes } from "../modules/about/about.route";
import { TechRoutes } from "../modules/tech/tech.route";
import { SoftSkillRoutes } from "../modules/softSkill/softSkill.route";

export const router = Router();

router.use("/auth", AuthRoutes);
router.use("/blogs", BlogRoutes);
router.use("/projects", ProjectRoutes);
router.use("/about", AboutRoutes);
router.use("/techs", TechRoutes);
router.use("/soft-skills", SoftSkillRoutes);