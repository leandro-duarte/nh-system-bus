/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `busLines` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[prefix]` on the table `vehicles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `zones` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `busLines_code_key` ON `busLines`(`code`);

-- CreateIndex
CREATE UNIQUE INDEX `vehicles_prefix_key` ON `vehicles`(`prefix`);

-- CreateIndex
CREATE UNIQUE INDEX `zones_code_key` ON `zones`(`code`);
