import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { TechService } from "./tech.service";

const createTech = catchAsync(async (req: Request, res: Response) => {
  const imageUrl = req.file ? (req.file as any).path : undefined;

  const result = await TechService.createTech({
    ...req.body,
    image: imageUrl,
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Tech created successfully ✅",
    data: result,
  });
});

const getAllTechs = catchAsync(async (req: Request, res: Response) => {
  const result = await TechService.getAllTechs();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Techs retrieved successfully ✅",
    data: result,
  });
});


export const TechController = {
  createTech,
  getAllTechs,
};
