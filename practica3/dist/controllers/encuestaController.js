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
exports.deleteEncuesta = exports.updateEncuesta = exports.createEncuesta = exports.getEncuestaById = exports.getAllEncuestas = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Obtener todas las encuestas
const getAllEncuestas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const encuestas = yield prisma.encuesta.findMany({
            where: {
                estado: {
                    not: "eliminado"
                }
            }
        });
        res.status(200).json(encuestas);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener las encuestas', error: error.message });
    }
});
exports.getAllEncuestas = getAllEncuestas;
// Obtener una encuesta por su ID
const getEncuestaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const encuesta = yield prisma.encuesta.findUnique({ where: { id: Number(id) } });
        if (!encuesta || encuesta.estado === 'eliminado') {
            return res.status(404).json({ message: 'Encuesta no encontrada' });
        }
        res.status(200).json(encuesta);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener la encuesta', error: error.message });
    }
});
exports.getEncuestaById = getEncuestaById;
// Crear una nueva encuesta
const createEncuesta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descripcion, detalles } = req.body;
    try {
        const encuesta = yield prisma.encuesta.create({
            data: { descripcion, detalles },
        });
        res.status(201).json(encuesta);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear la encuesta', error: error.message });
    }
});
exports.createEncuesta = createEncuesta;
// Actualizar una encuesta existente
const updateEncuesta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { descripcion, detalles } = req.body;
    try {
        const updatedEncuesta = yield prisma.encuesta.update({
            where: { id: Number(id) },
            data: { descripcion, detalles },
        });
        res.status(200).json(updatedEncuesta);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar la encuesta', error: error.message });
    }
});
exports.updateEncuesta = updateEncuesta;
// Eliminar una encuesta
const deleteEncuesta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedEncuesta = yield prisma.encuesta.update({
            where: { id: Number(id) },
            data: { estado: 'eliminado' },
        });
        res.status(200).json(deletedEncuesta);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar la encuesta', error: error.message });
    }
});
exports.deleteEncuesta = deleteEncuesta;
