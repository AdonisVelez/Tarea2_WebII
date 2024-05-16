/*
  Warnings:

  - You are about to drop the `Encuesta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Persona` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Registro` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "estado" AS ENUM ('activo', 'pendiente', 'eliminado');

-- DropForeignKey
ALTER TABLE "Registro" DROP CONSTRAINT "Registro_encuestaId_fkey";

-- DropForeignKey
ALTER TABLE "Registro" DROP CONSTRAINT "Registro_personaId_fkey";

-- DropTable
DROP TABLE "Encuesta";

-- DropTable
DROP TABLE "Persona";

-- DropTable
DROP TABLE "Registro";

-- CreateTable
CREATE TABLE "persona" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,
    "estado" "estado" NOT NULL DEFAULT 'activo',

    CONSTRAINT "persona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encuesta" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "detalles" TEXT NOT NULL,
    "estado" "estado" NOT NULL DEFAULT 'activo',

    CONSTRAINT "encuesta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registro" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "personaId" INTEGER NOT NULL,
    "encuestaId" INTEGER NOT NULL,
    "estado" "estado" NOT NULL DEFAULT 'activo',

    CONSTRAINT "registro_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "registro" ADD CONSTRAINT "registro_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro" ADD CONSTRAINT "registro_encuestaId_fkey" FOREIGN KEY ("encuestaId") REFERENCES "encuesta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
