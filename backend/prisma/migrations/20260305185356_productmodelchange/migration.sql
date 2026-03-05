/*
  Warnings:

  - You are about to drop the column `deliveredIn` on the `Products` table. All the data in the column will be lost.
  - Added the required column `img` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `deliveringTime` on the `Products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "deliveredIn",
ADD COLUMN     "img" TEXT NOT NULL,
ADD COLUMN     "willdeliveredIn" TIMESTAMP(3),
DROP COLUMN "deliveringTime",
ADD COLUMN     "deliveringTime" INTEGER NOT NULL;
