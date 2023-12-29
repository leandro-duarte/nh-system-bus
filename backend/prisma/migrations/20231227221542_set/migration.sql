-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `cpf` VARCHAR(14) NOT NULL,
    `rg` VARCHAR(10) NOT NULL,
    `adress` JSON NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `employeeId` VARCHAR(6) NOT NULL,
    `password` VARCHAR(15) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_cpf_key`(`cpf`),
    UNIQUE INDEX `users_rg_key`(`rg`),
    UNIQUE INDEX `users_email_key`(`email`),
    UNIQUE INDEX `users_phone_key`(`phone`),
    UNIQUE INDEX `users_employeeId_key`(`employeeId`),
    UNIQUE INDEX `users_password_key`(`password`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agency` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `cnpj` VARCHAR(14) NOT NULL,
    `adress` JSON NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `agency_cnpj_key`(`cnpj`),
    UNIQUE INDEX `agency_email_key`(`email`),
    UNIQUE INDEX `agency_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `busNeworks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `cnpj` VARCHAR(14) NOT NULL,
    `adress` JSON NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `agencyId` INTEGER NOT NULL,
    `zoneId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `busNeworks_cnpj_key`(`cnpj`),
    UNIQUE INDEX `busNeworks_email_key`(`email`),
    UNIQUE INDEX `busNeworks_phone_key`(`phone`),
    UNIQUE INDEX `busNeworks_zoneId_key`(`zoneId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Company` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `adress` JSON NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `busNetworkId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Company_email_key`(`email`),
    UNIQUE INDEX `Company_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vehicles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `manufacturer` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `prefix` VARCHAR(191) NOT NULL,
    `manufacturingYear` YEAR NOT NULL,
    `capacity` INTEGER NOT NULL,
    `companyId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `busLines` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` INTEGER NOT NULL,
    `timeStart` TIME NOT NULL,
    `timeEnd` TIME NOT NULL,
    `ridership` INTEGER NOT NULL,
    `vehicleId` INTEGER NOT NULL,
    `companyId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `busLines_vehicleId_key`(`vehicleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `zones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(1) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `busNeworks` ADD CONSTRAINT `busNeworks_agencyId_fkey` FOREIGN KEY (`agencyId`) REFERENCES `agency`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `busNeworks` ADD CONSTRAINT `busNeworks_zoneId_fkey` FOREIGN KEY (`zoneId`) REFERENCES `zones`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Company` ADD CONSTRAINT `Company_busNetworkId_fkey` FOREIGN KEY (`busNetworkId`) REFERENCES `busNeworks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehicles` ADD CONSTRAINT `vehicles_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `busLines` ADD CONSTRAINT `busLines_vehicleId_fkey` FOREIGN KEY (`vehicleId`) REFERENCES `vehicles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `busLines` ADD CONSTRAINT `busLines_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
