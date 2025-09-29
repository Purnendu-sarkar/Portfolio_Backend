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



export const ProjectService = {
  createProject,
  getAllProjects
};