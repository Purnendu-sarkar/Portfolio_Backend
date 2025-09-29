import { Prisma, Post } from "@prisma/client";
import { prisma } from "../../config/db";

const createBlog = async (payload: Prisma.PostCreateInput): Promise<Post> => {
  const result = await prisma.post.create({ data: payload });
  return result;
};

const getAllBlogs = async (query: any) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  const skip = (page - 1) * limit;

  const [blogs, total] = await Promise.all([
    prisma.post.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.post.count(),
  ]);

  return {
    blogs,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const getBlogById = async (id: number): Promise<Post | null> => {
  return await prisma.$transaction(async (tx) => {
    await tx.post.update({
      where: { id },
      data: { views: { increment: 1 } },
    });
    return tx.post.findUnique({ where: { id } });
  });
};


export const BlogService = {
  createBlog,
  getAllBlogs,
  getBlogById
};