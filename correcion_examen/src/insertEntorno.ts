import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function inicializarEntornos() {
  try {
    // Insertar el entorno de desarrollo
    await prisma.entorno.create({
      data: {
        descripcion: 'desarrollo'
      }
    });

    // Insertar el entorno de pruebas
    await prisma.entorno.create({
      data: {
        descripcion: 'pruebas'
      }
    });

    // Insertar el entorno de producción
    await prisma.entorno.create({
      data: {
        descripcion: 'produccion'
      }
    });

    console.log("Entornos insertados correctamente.");
  } catch (error) {
    console.error("Error al insertar los entornos:", error);
  } finally {
    await prisma.$disconnect();
  }
}

inicializarEntornos();
