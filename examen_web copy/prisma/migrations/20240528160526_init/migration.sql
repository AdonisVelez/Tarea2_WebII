/*
  Warnings:

  - Changed the type of `descripcion` on the `entorno` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "entorno" DROP COLUMN "descripcion",
ADD COLUMN     "descripcion" TEXT NOT NULL;

-- DropEnum
DROP TYPE "entornos";
