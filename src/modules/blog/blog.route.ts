import express from "express";
import { BlogController } from "./blog.controller";
import { auth } from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { createBlogSchema, updateBlogSchema } from "./blog.validation";


const router = express.Router();

router.get("/", BlogController.getAllBlogs);
router.get("/:id", BlogController.getBlogById);
router.post("/", auth, validateRequest(createBlogSchema), BlogController.createBlog);
router.patch("/:id", auth, validateRequest(updateBlogSchema), BlogController.updateBlog);
router.delete("/:id", auth, BlogController.deleteBlog);

export const BlogRoutes = router;