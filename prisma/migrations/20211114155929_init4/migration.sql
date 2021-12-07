-- AlterTable
ALTER TABLE `Product` ADD COLUMN `discountPrice` VARCHAR(191) NULL,
    MODIFY `published` BOOLEAN NOT NULL DEFAULT true;
