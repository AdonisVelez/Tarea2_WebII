-- CreateTable
CREATE TABLE "doctor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paciente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "enfermedad" TEXT NOT NULL,

    CONSTRAINT "paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receta" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "nombremedicamento" TEXT NOT NULL,
    "iddoctor" INTEGER NOT NULL,
    "idpaciente" INTEGER NOT NULL,

    CONSTRAINT "receta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "receta" ADD CONSTRAINT "receta_iddoctor_fkey" FOREIGN KEY ("iddoctor") REFERENCES "doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receta" ADD CONSTRAINT "receta_idpaciente_fkey" FOREIGN KEY ("idpaciente") REFERENCES "paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
