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

const getSingleSoftSkill = async (id: number): Promise<SoftSkill | null> => {
  return await prisma.softSkill.findUnique({
    where: { id }
  });
};

const updateSoftSkill = async (id: number, payload: Prisma.SoftSkillUncheckedUpdateInput): Promise<SoftSkill> => {
  return await prisma.softSkill.update({
    where: { id },
    data: payload,
  });
};

const deleteSoftSkill = async (id: number): Promise<SoftSkill> => {
  return await prisma.softSkill.delete({
    where: { id }
  });
};


export const SoftSkillService = {
  createSoftSkill,
  getAllSoftSkills,
  getSingleSoftSkill,
  updateSoftSkill,
  deleteSoftSkill
};