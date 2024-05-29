-- CreateEnum
CREATE TYPE "entornos" AS ENUM ('desarrollo', 'pruebas', 'produccion');

-- CreateTable
CREATE TABLE "persona" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,

    CONSTRAINT "persona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encuesta" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "detalles" TEXT NOT NULL,

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

    CONSTRAINT "registro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entorno" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "entornos" "entornos" NOT NULL DEFAULT 'pruebas',

    CONSTRAINT "entorno_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "registro" ADD CONSTRAINT "registro_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro" ADD CONSTRAINT "registro_encuestaId_fkey" FOREIGN KEY ("encuestaId") REFERENCES "encuesta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
