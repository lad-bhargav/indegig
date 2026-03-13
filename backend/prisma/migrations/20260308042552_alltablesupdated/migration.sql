-- DropForeignKey
ALTER TABLE "Buyer" DROP CONSTRAINT "Buyer_buyerId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "Seller" DROP CONSTRAINT "Seller_sellerId_fkey";

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Buyer" ADD CONSTRAINT "Buyer_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("sellerId") ON DELETE CASCADE ON UPDATE CASCADE;
