import { z } from "zod";

export const createAboutSchema = z.object({
  name: z.string().min(1, "Name is required"),
  positions: z.string().min(2, "Positions array (as JSON) is required"), 
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  profilePic: z.any().optional(),
});

export const updateAboutSchema = createAboutSchema.partial();
