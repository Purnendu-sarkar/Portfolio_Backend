import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ProjectService } from "./project.service";

const createProject = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  if (req.file && "path" in req.file) {
    data.thumbnail = (req.file as any).path;
  }
  

  const result = await ProjectService.createProject(data);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Project created successfully ✅",
    data: result,
  });
});

const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.getAllProjects();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Projects retrieved successfully ✅",
    data: result,
  });
});

const getProjectById = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.getProjectById(Number(req.params.id));
  if (!result) {
    throw new Error("Project not found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project retrieved successfully ✅",
    data: result,
  });
});

const updateProject = catchAsync(async (req: Request, res: Response) => {
  const thumbnailUrl = req.file ? (req.file as any).path : undefined;
  const result = await ProjectService.updateProject(Number(req.params.id), {
      ...req.body,
      ...(thumbnailUrl && { thumbnail: thumbnailUrl }),
    });
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project updated successfully ✅",
    data: result,
  });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.deleteProject(Number(req.params.id));
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project deleted successfully ✅",
    data: result,
  });
});



export const ProjectController = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject
};