/*
  Warnings:

  - Added the required column `user` to the `shippingAddress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shippingAddress` ADD COLUMN `user` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `shippingAddress` ADD CONSTRAINT `shippingAddress_user_fkey` FOREIGN KEY (`user`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
