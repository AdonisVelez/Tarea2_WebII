import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function llenar() {
    const transacciones = [];
    for (let i = 0; i < 10; i++){
        const transaccion = await prisma.registro.create({
            data: {
                fecha: new Date(),
                hora: new Date(),
                ubicacion: `Ubicacion ${i +1}`,
                persona: { 
                    create: {
                        nombre: `Persona ${i +1}`,
                        identificacion: `ID-${i + 1}`
                    }
                },
                encuesta: {
                    create: {
                        descripcion: `Encuesta ${i + 1}`,
                        detalles: `Detalles de la encuesta ${ i + 1}`
                    }
                }
            }
        });
        transacciones.push(transaccion);
    }
    console.log("Se han insertado 10 elementos en la entidad transaccional.");
}

export default llenar;