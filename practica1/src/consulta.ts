import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function consultar() {
    const transacciones = await prisma.registro.findMany({
        include: {
            persona: {
                select: {
                    nombre: true,
                    identificacion: true
                }
            },
            encuesta: {
                select: {
                    descripcion: true
                }
            }
        }
    });

    console.log("Lista de transacciones");
    console.log(transacciones);
}

export default consultar;