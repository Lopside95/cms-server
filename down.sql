-- DropForeignKey
ALTER TABLE `Animal` DROP FOREIGN KEY `Animal_shelter_id_fkey`;

-- DropForeignKey
ALTER TABLE `Food` DROP FOREIGN KEY `Food_shelter_id_fkey`;

-- DropIndex
DROP INDEX `Animal_chip_number_key` ON `Animal`;

-- AlterTable
ALTER TABLE `Animal` DROP COLUMN `chip_number`,
    DROP COLUMN `created_at`,
    DROP COLUMN `shelter_id`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `chipNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `shelterId` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Shelter` DROP COLUMN `created_at`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Food` DROP COLUMN `created_at`,
    DROP COLUMN `shelter_id`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `shelterId` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Animal_chipNumber_key` ON `Animal`(`chipNumber` ASC);

-- CreateIndex
CREATE INDEX `Animal_shelterId_fkey` ON `Animal`(`shelterId` ASC);

-- CreateIndex
CREATE INDEX `Food_shelterId_fkey` ON `Food`(`shelterId` ASC);

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_shelterId_fkey` FOREIGN KEY (`shelterId`) REFERENCES `Shelter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Food` ADD CONSTRAINT `Food_shelterId_fkey` FOREIGN KEY (`shelterId`) REFERENCES `Shelter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

