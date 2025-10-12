import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { SoftSkillService } from "./softSkill.service";

const createSoftSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SoftSkillService.createSoftSkill(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Soft Skill created successfully ✅",
    data: result,
  });
});

const getAllSoftSkills = catchAsync(async (req: Request, res: Response) => {
  const result = await SoftSkillService.getAllSoftSkills();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Soft Skills retrieved successfully ✅",
    data: result,
  });
});

const getSingleSoftSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SoftSkillService.getSingleSoftSkill(Number(req.params.id));
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Soft Skill retrieved successfully ✅",
    data: result,
  });
});

const updateSoftSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SoftSkillService.updateSoftSkill(Number(req.params.id), req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Soft Skill updated successfully ✅",
    data: result,
  });
});


export const SoftSkillController = {
  createSoftSkill,
  getAllSoftSkills,
  getSingleSoftSkill,
  updateSoftSkill,
};