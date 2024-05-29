import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function insertarElementoEnColeccionTransaccional() {
  try {
    // Crear una nueva persona asociada al entorno de pruebas
    const nuevaPersona = await prisma.persona.create({
      data: {
        nombre: "Nombre de prueba",
        identificacion: "Identificación de prueba",
        entorno: {
          connect: { id: 2 } // Conectar con el entorno de pruebas
        }
      }
    });

    // Crear una nueva encuesta
    const nuevaEncuesta = await prisma.encuesta.create({
      data: {
        descripcion: "Descripción de prueba",
        detalles: "Detalles de prueba",
        entorno: {
          connect: {  id: 2 } // Conectar con el entorno de pruebas
        }
      }
    });

    // Buscar el entorno de pruebas
    const entornoPruebas = await prisma.entorno.findFirst({
      where: {
        descripcion: 'pruebas'
      }
    });

    // Verificar si se encontró el entorno de pruebas
    if (!entornoPruebas) {
      console.error("No se encontró el entorno de pruebas en la base de datos.");
      return;
    }

    // Insertar un nuevo registro asociado al entorno de pruebas, persona y encuesta
    const nuevoRegistro = await prisma.registro.create({
      data: {
        fecha: new Date(),
        hora: new Date(),
        ubicacion: "Ubicación de prueba",
        entornoId: entornoPruebas.id,
        personaId: nuevaPersona.id,
        encuestaId: nuevaEncuesta.id
      }
    });

    console.log("Elemento insertado en la colección transaccional con éxito:", nuevoRegistro);
  } catch (error) {
    console.error("Error al insertar el elemento en la colección transaccional:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Insertar un elemento en la colección transaccional con el entorno de pruebas
insertarElementoEnColeccionTransaccional();
