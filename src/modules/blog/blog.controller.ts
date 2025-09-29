import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { BlogService } from "./blog.service";


const createBlog = catchAsync(async (req: Request, res: Response) => {
    const result = await BlogService.createBlog(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Blog created successfully",
        data: result,
    });
});



export const BlogController = {
    createBlog
};