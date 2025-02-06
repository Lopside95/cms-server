-- Drop existing index if it exists
DROP INDEX IF EXISTS `Animal_shelter_id_fkey` ON `Animal`;

-- CreateIndex
CREATE INDEX `Animal_shelter_id_fkey` ON `Animal`(`shelter_id` ASC);

-- Drop existing index if it exists
DROP INDEX IF EXISTS `Food_shelter_id_fkey` ON `Food`;

-- CreateIndex
CREATE INDEX `Food_shelter_id_fkey` ON `Food`(`shelter_id` ASC);