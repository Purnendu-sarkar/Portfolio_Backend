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

const getSingleTech = catchAsync(async (req: Request, res: Response) => {
  const result = await TechService.getSingleTech(Number(req.params.id));
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Tech retrieved successfully ✅",
    data: result,
  });
});

const updateTech = catchAsync(async (req: Request, res: Response) => {
  const imageUrl = req.file ? (req.file as any).path : undefined;

  const result = await TechService.updateTech(Number(req.params.id), {
    ...req.body,
    ...(imageUrl && { image: imageUrl }),
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Tech updated successfully ✅",
    data: result,
  });
});


const deleteTech = catchAsync(async (req: Request, res: Response) => {
  const result = await TechService.deleteTech(Number(req.params.id));
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Tech deleted successfully ✅",
    data: result,
  });
});


export const TechController = {
  createTech,
  getAllTechs,
  getSingleTech,
  updateTech,
  deleteTech
};
