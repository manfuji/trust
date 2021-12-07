-- DropForeignKey
ALTER TABLE `shippingAddress` DROP FOREIGN KEY `shippingAddress_user_fkey`;

-- AddForeignKey
ALTER TABLE `shippingAddress` ADD CONSTRAINT `shippingAddress_user_fkey` FOREIGN KEY (`user`) REFERENCES `User`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
