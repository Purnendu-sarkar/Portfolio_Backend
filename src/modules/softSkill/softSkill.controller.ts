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

export const SoftSkillController = {
  createSoftSkill,
};