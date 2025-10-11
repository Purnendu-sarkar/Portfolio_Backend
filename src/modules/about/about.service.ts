import { Prisma, About } from "@prisma/client";
import { prisma } from "../../config/db";

const createAbout = async (payload: Prisma.AboutCreateInput): Promise<About> => {
  const result = await prisma.about.create({ data: payload });
  return result;
};

const getAbout = async (): Promise<About | null> => {
  const result = await prisma.about.findFirst({
    orderBy: { createdAt: "desc" },
  });
  return result;
};

const updateAbout = async (
  id: number,
  payload: Prisma.AboutUncheckedUpdateInput
): Promise<About> => {
  return await prisma.about.update({
    where: { id },
    data: payload,
  });
};


export const AboutService = {
  createAbout,
  getAbout,
  updateAbout,
};
