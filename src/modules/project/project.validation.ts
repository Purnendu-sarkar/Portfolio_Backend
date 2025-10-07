import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  thumbnail: z.string().optional(),
  projectType: z.enum(["FullStack", "Frontend", "Backend"]).refine(
    (val) => !!val,
    { message: "Project type is required" }
  ),

  githubClient: z.string().optional(),
  githubServer: z.string().optional(),
  liveSite: z.string().optional(),
  technologies: z.array(z.string()).nonempty("At least one technology is required"),
  features: z.array(z.string()).nonempty("At least one feature is required"),
});

export const updateProjectSchema = createProjectSchema.partial();
