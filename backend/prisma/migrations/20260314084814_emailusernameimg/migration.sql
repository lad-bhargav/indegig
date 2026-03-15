/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Buyer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Seller` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Buyer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Seller` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Buyer" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "profileImg" TEXT,
ADD COLUMN     "username" TEXT;

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "revisions" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Seller" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "profileImg" TEXT,
ADD COLUMN     "username" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "profileImg" TEXT,
ADD COLUMN     "username" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Buyer_email_key" ON "Buyer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Seller_email_key" ON "Seller"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
