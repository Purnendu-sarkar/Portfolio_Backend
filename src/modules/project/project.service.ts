import { Prisma, Project } from "@prisma/client";
import { prisma } from "../../config/db";

const createProject = async (payload: Prisma.ProjectCreateInput): Promise<Project> => {
  const result = await prisma.project.create({
    data: payload
  });
  return result;
};

const getAllProjects = async (): Promise<Project[]> => {
  return await prisma.project.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
};

const getProjectById = async (id: number): Promise<Project | null> => {
  return await prisma.project.findUnique({
    where: { id }
  });
};

const updateProject = async (id: number, payload: Partial<Project>): Promise<Project> => {
  const result = await prisma.project.update({
    where: { id },
    data: payload
  });
  return result;
};



export const ProjectService = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject
};