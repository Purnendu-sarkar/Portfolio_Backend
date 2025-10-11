import { Prisma, Tech } from "@prisma/client";
import { prisma } from "../../config/db";

const createTech = async (payload: Prisma.TechCreateInput): Promise<Tech> => {
  return await prisma.tech.create({ data: payload });
};

const getAllTechs = async (): Promise<Tech[]> => {
  return await prisma.tech.findMany({
    orderBy: { createdAt: "desc" },
  });
};


const getSingleTech = async (id: number): Promise<Tech | null> => {
  return await prisma.tech.findUnique({ where: { id } });
};

const updateTech = async (id: number, payload: Prisma.TechUncheckedUpdateInput): Promise<Tech> => {
  return await prisma.tech.update({
    where: { id },
    data: payload,
  });
};


export const TechService = {
  createTech,
  getAllTechs,
  getSingleTech,
  updateTech,
};
