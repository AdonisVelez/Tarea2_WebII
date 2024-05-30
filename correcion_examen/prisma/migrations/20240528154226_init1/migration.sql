/*
  Warnings:

  - You are about to drop the column `entornos` on the `entorno` table. All the data in the column will be lost.
  - The `descripcion` column on the `entorno` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `entornoId` to the `encuesta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entornoId` to the `persona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entornoId` to the `registro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "encuesta" ADD COLUMN     "entornoId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "entorno" DROP COLUMN "entornos",
DROP COLUMN "descripcion",
ADD COLUMN     "descripcion" "entornos" NOT NULL DEFAULT 'desarrollo';

-- AlterTable
ALTER TABLE "persona" ADD COLUMN     "entornoId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "registro" ADD COLUMN     "entornoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "persona" ADD CONSTRAINT "persona_entornoId_fkey" FOREIGN KEY ("entornoId") REFERENCES "entorno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encuesta" ADD CONSTRAINT "encuesta_entornoId_fkey" FOREIGN KEY ("entornoId") REFERENCES "entorno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro" ADD CONSTRAINT "registro_entornoId_fkey" FOREIGN KEY ("entornoId") REFERENCES "entorno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
