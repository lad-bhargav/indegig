-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_buyerId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_sellerId_fkey";

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("sellerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "Buyer"("buyerId") ON DELETE SET NULL ON UPDATE CASCADE;
