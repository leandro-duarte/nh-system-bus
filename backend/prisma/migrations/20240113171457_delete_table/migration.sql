/*
  Warnings:

  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `agency` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `busLines` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `busNeworks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vehicles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `zones` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Company` DROP FOREIGN KEY `Company_busNetworkId_fkey`;

-- DropForeignKey
ALTER TABLE `busLines` DROP FOREIGN KEY `busLines_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `busLines` DROP FOREIGN KEY `busLines_vehicleId_fkey`;

-- DropForeignKey
ALTER TABLE `busNeworks` DROP FOREIGN KEY `busNeworks_agencyId_fkey`;

-- DropForeignKey
ALTER TABLE `busNeworks` DROP FOREIGN KEY `busNeworks_zoneId_fkey`;

-- DropForeignKey
ALTER TABLE `vehicles` DROP FOREIGN KEY `vehicles_companyId_fkey`;

-- DropTable
DROP TABLE `Company`;

-- DropTable
DROP TABLE `agency`;

-- DropTable
DROP TABLE `busLines`;

-- DropTable
DROP TABLE `busNeworks`;

-- DropTable
DROP TABLE `users`;

-- DropTable
DROP TABLE `vehicles`;

-- DropTable
DROP TABLE `zones`;
