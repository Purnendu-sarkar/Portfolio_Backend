import { Prisma, SoftSkill } from "@prisma/client";
import { prisma } from "../../config/db";

const createSoftSkill = async (payload: Prisma.SoftSkillCreateInput): Promise<SoftSkill> => {
  return await prisma.softSkill.create({ data: payload });
};

export const SoftSkillService = {
  createSoftSkill,
};