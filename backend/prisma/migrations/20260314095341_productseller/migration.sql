/*
  Warnings:

  - Added the required column `sellerEmail` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "sellerEmail" TEXT NOT NULL,
ADD COLUMN     "sellerProfileImg" TEXT,
ADD COLUMN     "sellerUsername" TEXT;
