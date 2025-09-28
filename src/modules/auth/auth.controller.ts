import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";

const login = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.login(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Logged in successfully✅",
        data: result,
    });
});

export const AuthController = {
    login
};