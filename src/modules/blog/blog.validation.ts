import { z } from "zod";

export const createBlogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  thumbnail: z.any().optional(),
  tags: z.array(z.string()).optional(),
});

export const updateBlogSchema = createBlogSchema.partial();