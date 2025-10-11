import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AboutService } from "./about.service";

const createAbout = catchAsync(async (req: Request, res: Response) => {
    const profilePicUrl = req.file ? (req.file as any).path : undefined;

    const result = await AboutService.createAbout({
        ...req.body,
        profilePic: profilePicUrl,
        positions: req.body.positions ? JSON.parse(req.body.positions) : [],
    });

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "About info created successfully ✅",
        data: result,
    });
});


export const AboutController = {
    createAbout
};
