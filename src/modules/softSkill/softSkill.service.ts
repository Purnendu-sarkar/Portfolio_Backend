import { Prisma, SoftSkill } from "@prisma/client";
import { prisma } from "../../config/db";

const createSoftSkill = async (payload: Prisma.SoftSkillCreateInput): Promise<SoftSkill> => {
  return await prisma.softSkill.create({ data: payload });
};

const getAllSoftSkills = async (): Promise<SoftSkill[]> => {
  return await prisma.softSkill.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const SoftSkillService = {
  createSoftSkill,
  getAllSoftSkills,
};