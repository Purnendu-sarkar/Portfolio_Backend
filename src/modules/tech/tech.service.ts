import { Prisma, Tech } from "@prisma/client";
import { prisma } from "../../config/db";

const createTech = async (payload: Prisma.TechCreateInput): Promise<Tech> => {
  return await prisma.tech.create({ data: payload });
};



export const TechService = {
  createTech,
};
