import { Prisma, Post } from "@prisma/client";
import { prisma } from "../../config/db";

const createBlog = async (payload: Prisma.PostCreateInput): Promise<Post> => {
  const result = await prisma.post.create({ data: payload });
  return result;
};


export const BlogService = {
  createBlog
};