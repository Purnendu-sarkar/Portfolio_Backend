import { z } from "zod";

export const createSoftSkillSchema = z.object({
    title: z.string().min(1, "Title is required"),
    shortDesc: z.string().min(1, "Short description is required"),
    percentage: z
        .number()
        .min(0, "Percentage cannot be less than 0")
        .max(100, "Percentage cannot be more than 100"),
    type: z.enum([
        "Interpersonal",
        "Teamwork",
        "Leadership",
        "ProblemSolving",
        "Creativity",
        "Management",
        "Other",
    ]),
    icon: z.string().min(1, "Icon is required"),
});

export const updateSoftSkillSchema = createSoftSkillSchema.partial();
