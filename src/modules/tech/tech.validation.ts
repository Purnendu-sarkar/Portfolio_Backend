import { z } from "zod";

export const createTechSchema = z.object({
  name: z.string().min(1, "Tech name is required"),
  category: z.enum(["Frontend", "Backend", "Tools", "Database"], {
    message: "Category is required",
  }),
  image: z.any().optional(),
});

export const updateTechSchema = createTechSchema.partial();
