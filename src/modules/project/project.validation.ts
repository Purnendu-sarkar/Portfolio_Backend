import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  thumbnail: z.string().optional(),
  link: z.string().optional(),
  liveSite: z.string().optional(),
  features: z.array(z.string()).optional(),
});

