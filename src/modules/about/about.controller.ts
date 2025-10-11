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

const getAbout = catchAsync(async (req: Request, res: Response) => {
    const result = await AboutService.getAbout();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "About info retrieved successfully ✅",
        data: result,
    });
});


const updateAbout = catchAsync(async (req: Request, res: Response) => {
    const profilePicUrl = req.file ? (req.file as any).path : undefined;

    const result = await AboutService.updateAbout(Number(req.params.id), {
        ...req.body,
        positions: req.body.positions ? JSON.parse(req.body.positions) : [],
        ...(profilePicUrl && { profilePic: profilePicUrl }),
    });

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "About info updated successfully ✅",
        data: result,
    });
});


export const AboutController = {
    createAbout,
    getAbout,
    updateAbout
};


