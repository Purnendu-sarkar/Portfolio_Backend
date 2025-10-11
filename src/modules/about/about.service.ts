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


export const AboutService = {
  createAbout,
  getAbout,
};
