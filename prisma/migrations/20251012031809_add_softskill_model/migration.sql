-- CreateEnum
CREATE TYPE "public"."SkillType" AS ENUM ('Interpersonal', 'Teamwork', 'Leadership', 'ProblemSolving', 'Creativity', 'Management', 'Other');

-- CreateTable
CREATE TABLE "public"."SoftSkill" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "shortDesc" TEXT NOT NULL,
    "percentage" INTEGER NOT NULL,
    "type" "public"."SkillType" NOT NULL,
    "icon" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SoftSkill_pkey" PRIMARY KEY ("id")
);
