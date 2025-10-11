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


export const TechController = {
  createTech,
};
