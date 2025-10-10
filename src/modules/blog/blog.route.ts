import express from "express";
import { BlogController } from "./blog.controller";
import { auth } from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { createBlogSchema, updateBlogSchema } from "./blog.validation";
import { upload } from "../../middlewares/upload";


const router = express.Router();

router.get("/", BlogController.getAllBlogs);
router.get("/:id", BlogController.getBlogById);
router.post("/", auth, upload.single("thumbnail"), validateRequest(createBlogSchema), BlogController.createBlog);
router.patch("/:id", auth, upload.single("thumbnail"), validateRequest(updateBlogSchema), BlogController.updateBlog);
router.delete("/:id", auth, BlogController.deleteBlog);

export const BlogRoutes = router;