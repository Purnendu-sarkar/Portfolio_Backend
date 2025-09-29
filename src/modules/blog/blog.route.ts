import express from "express";
import { BlogController } from "./blog.controller";
import { auth } from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { createBlogSchema } from "./blog.validation";


const router = express.Router();

router.get("/", BlogController.getAllBlogs);
router.post("/", auth, validateRequest(createBlogSchema), BlogController.createBlog);

export const BlogRoutes = router;