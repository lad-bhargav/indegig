-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_buyerId_fkey";

-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "buyerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "Buyer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
