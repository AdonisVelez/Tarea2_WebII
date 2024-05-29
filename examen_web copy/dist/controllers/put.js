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
class Controlador {
    putElemento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { entidad, elementoId } = req.params;
                const { entornoId } = req.body;
                // Verificar si la entidad existe en el esquema
                if (!['persona', 'encuesta', 'registro'].includes(entidad)) {
                    return res.status(400).json({ error: 'La entidad proporcionada no es válida' });
                }
                // Verificar si el entorno existe en la base de datos
                const entornoExistente = yield prisma.entorno.findUnique({
                    where: { id: parseInt(entornoId) }
                });
                if (!entornoExistente) {
                    return res.status(404).json({ error: 'El entorno no existe' });
                }
                // Actualizar el entorno del elemento
                let entidadActualizada;
                switch (entidad) {
                    case 'persona':
                        entidadActualizada = yield prisma.persona.update({
                            where: { id: parseInt(elementoId) },
                            data: { entornoId: parseInt(entornoId) }
                        });
                        break;
                    case 'encuesta':
                        entidadActualizada = yield prisma.encuesta.update({
                            where: { id: parseInt(elementoId) },
                            data: { entornoId: parseInt(entornoId) }
                        });
                        break;
                    case 'registro':
                        entidadActualizada = yield prisma.registro.update({
                            where: { id: parseInt(elementoId) },
                            data: { entornoId: parseInt(entornoId) }
                        });
                        break;
                    default:
                        return res.status(400).json({ error: 'Entidad no reconocida' });
                }
                // Retornar la entidad actualizada
                res.json(entidadActualizada);
            }
            catch (error) {
                console.error('Error al actualizar el elemento:', error);
                res.status(500).json({ error: 'Error interno del servidor' });
            }
        });
    }
}
exports.default = Controlador;
