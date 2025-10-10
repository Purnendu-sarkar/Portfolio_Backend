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

const updateBlog = async (id: number, payload: Partial<Post>): Promise<Post> => {
  //console.log("Incoming payload:", payload);
  const result = await prisma.post.update({
    where: { id },
    data: payload
  });
  return result;
};

const deleteBlog = async (id: number): Promise<Post> => {
  const result = await prisma.post.delete({
    where: { id }
  });
  return result;
};


export const BlogService = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
};