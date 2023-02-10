/*
  Warnings:

  - A unique constraint covering the columns `[userKey,item]` on the table `Review` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userKey` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "userKey" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Review_userKey_item_key" ON "Review"("userKey", "item");
