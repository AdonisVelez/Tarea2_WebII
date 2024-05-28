"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertarElementoEnColeccionTransaccional() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Crear una nueva persona asociada al entorno de pruebas
            const nuevaPersona = yield prisma.persona.create({
                data: {
                    nombre: "Nombre de prueba",
                    identificacion: "Identificación de prueba",
                    entorno: {
                        connect: { id: 2 } // Conectar con el entorno de pruebas
                    }
                }
            });
            // Crear una nueva encuesta
            const nuevaEncuesta = yield prisma.encuesta.create({
                data: {
                    descripcion: "Descripción de prueba",
                    detalles: "Detalles de prueba",
                    entorno: {
                        connect: { id: 2 } // Conectar con el entorno de pruebas
                    }
                }
            });
            // Buscar el entorno de pruebas
            const entornoPruebas = yield prisma.entorno.findFirst({
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
            const nuevoRegistro = yield prisma.registro.create({
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
        }
        catch (error) {
            console.error("Error al insertar el elemento en la colección transaccional:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
// Insertar un elemento en la colección transaccional con el entorno de pruebas
insertarElementoEnColeccionTransaccional();
