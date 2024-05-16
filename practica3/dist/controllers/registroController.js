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
exports.deleteRegistro = exports.updateRegistro = exports.createRegistro = exports.getRegistroById = exports.getAllRegistros = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Obtener todos los registros
const getAllRegistros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registros = yield prisma.registro.findMany({
            where: {
                estado: {
                    not: "eliminado"
                }
            }
        });
        res.status(200).json(registros);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los registros', error: error.message });
    }
});
exports.getAllRegistros = getAllRegistros;
// Obtener un registro por su ID
const getRegistroById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const registro = yield prisma.registro.findUnique({ where: { id: Number(id) } });
        if (!registro || registro.estado === "eliminado") {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json(registro);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el registro', error: error.message });
    }
});
exports.getRegistroById = getRegistroById;
// Crear un nuevo registro
const createRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fecha, hora, ubicacion, personaId, encuestaId } = req.body;
    try {
        const registro = yield prisma.registro.create({
            data: { fecha, hora, ubicacion, personaId, encuestaId },
        });
        res.status(201).json(registro);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el registro', error: error.message });
    }
});
exports.createRegistro = createRegistro;
// Actualizar un registro existente
const updateRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { fecha, hora, ubicacion, personaId, encuestaId, estado } = req.body;
    try {
        const updatedRegistro = yield prisma.registro.update({
            where: { id: Number(id) },
            data: { fecha, hora, ubicacion, personaId, encuestaId, estado },
        });
        res.status(200).json(updatedRegistro);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el registro', error: error.message });
    }
});
exports.updateRegistro = updateRegistro;
// Eliminar un registro
const deleteRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedRegistro = yield prisma.registro.update({
            where: { id: Number(id) },
            data: { estado: 'eliminado' },
        });
        res.status(200).json(deletedRegistro);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar el registro', error: error.message });
    }
});
exports.deleteRegistro = deleteRegistro;
