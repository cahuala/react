/*
  Warnings:

  - The primary key for the `hotels` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `avaliacao` on the `hotels` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `price` on the `hotels` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - The primary key for the `schedulings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `services` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `price` on the `services` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- DropForeignKey
ALTER TABLE "_SchedulingToService" DROP CONSTRAINT "_SchedulingToService_A_fkey";

-- DropForeignKey
ALTER TABLE "_SchedulingToService" DROP CONSTRAINT "_SchedulingToService_B_fkey";

-- DropForeignKey
ALTER TABLE "schedulings" DROP CONSTRAINT "schedulings_hotelId_fkey";

-- AlterTable
ALTER TABLE "_SchedulingToService" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "hotels" DROP CONSTRAINT "hotels_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "avaliacao" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30),
ADD CONSTRAINT "hotels_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "hotels_id_seq";

-- AlterTable
ALTER TABLE "schedulings" DROP CONSTRAINT "schedulings_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "hotelId" SET DATA TYPE TEXT,
ADD CONSTRAINT "schedulings_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "schedulings_id_seq";

-- AlterTable
ALTER TABLE "services" DROP CONSTRAINT "services_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30),
ADD CONSTRAINT "services_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "services_id_seq";

-- AddForeignKey
ALTER TABLE "schedulings" ADD CONSTRAINT "schedulings_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SchedulingToService" ADD CONSTRAINT "_SchedulingToService_A_fkey" FOREIGN KEY ("A") REFERENCES "schedulings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SchedulingToService" ADD CONSTRAINT "_SchedulingToService_B_fkey" FOREIGN KEY ("B") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
