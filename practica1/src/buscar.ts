import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function buscar(id: number) {
  const transaccion = await prisma.registro.findUnique({
    where: {
      id: id
    },
    include: {
      persona: true,
      encuesta: true
    }
  });

  if (transaccion) {
    console.log('Transacción encontrada:');
    console.log(transaccion);
  } else {
    console.log('No se encontró ninguna transacción con el ID proporcionado.');
  }
}

export default buscar;
