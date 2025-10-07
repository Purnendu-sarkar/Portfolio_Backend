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
  const project = await prisma.project.update({
    where: { id },
    data: { views: { increment: 1 } },
  });
  return project;
};

const updateProject = async (id: number, payload: Partial<Project>): Promise<Project> => {
  const result = await prisma.project.update({
    where: { id },
    data: payload
  });
  return result;
};

const deleteProject = async (id: number): Promise<Project> => {
  const result = await prisma.project.delete({
    where: { id }
  });
  return result;
};



export const ProjectService = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject
};