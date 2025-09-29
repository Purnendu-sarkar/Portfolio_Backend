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
        message: "Blog created successfully ✅",
        data: result,
    });
});

const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
    const result = await BlogService.getAllBlogs(req.query);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Blogs retrieved successfully ✅",
        data: result,
    });
});


const getBlogById = catchAsync(async (req: Request, res: Response) => {
    const result = await BlogService.getBlogById(Number(req.params.id));
    if (!result) {
        throw new Error("Blog not found 😒");
    }
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Blog retrieved successfully ✅",
        data: result,
    });
});


export const BlogController = {
    createBlog,
    getAllBlogs,
    getBlogById
};