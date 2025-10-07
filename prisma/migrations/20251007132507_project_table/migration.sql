/*
  Warnings:

  - You are about to drop the column `link` on the `Project` table. All the data in the column will be lost.
  - Added the required column `projectType` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."ProjectType" AS ENUM ('FullStack', 'Frontend', 'Backend');

-- AlterTable
ALTER TABLE "public"."Project" DROP COLUMN "link",
ADD COLUMN     "githubClient" TEXT,
ADD COLUMN     "githubServer" TEXT,
ADD COLUMN     "projectType" "public"."ProjectType" NOT NULL,
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;
