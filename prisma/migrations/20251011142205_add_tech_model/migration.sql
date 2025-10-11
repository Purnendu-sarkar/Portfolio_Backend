-- CreateEnum
CREATE TYPE "public"."TechCategory" AS ENUM ('Frontend', 'Backend', 'Tools', 'Database');

-- CreateTable
CREATE TABLE "public"."Tech" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "public"."TechCategory" NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tech_pkey" PRIMARY KEY ("id")
);
