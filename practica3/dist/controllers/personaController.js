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
exports.deletePersona = exports.updatePersona = exports.createPersona = exports.getPersonaById = exports.getAllPersonas = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Obtener todas las personas
const getAllPersonas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personas = yield prisma.persona.findMany({
            where: {
                estado: {
                    not: "eliminado"
                }
            }
        });
        res.status(200).json(personas);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener las personas', error: error.message });
    }
});
exports.getAllPersonas = getAllPersonas;
// Obtener una persona por su ID
const getPersonaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const persona = yield prisma.persona.findUnique({ where: { id: Number(id) } });
        if (!persona || persona.estado === 'eliminado') {
            return res.status(404).json({ message: 'Persona no encontrada' });
        }
        res.status(200).json(persona);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener la persona', error: error.message });
    }
});
exports.getPersonaById = getPersonaById;
// Crear una nueva persona
const createPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, identificacion } = req.body;
    try {
        const persona = yield prisma.persona.create({
            data: { nombre, identificacion },
        });
        res.status(201).json(persona);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear la persona', error: error.message });
    }
});
exports.createPersona = createPersona;
// Actualizar una persona existente
const updatePersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, identificacion } = req.body;
    try {
        const updatedPersona = yield prisma.persona.update({
            where: { id: Number(id) },
            data: { nombre, identificacion },
        });
        res.status(200).json(updatedPersona);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar la persona', error: error.message });
    }
});
exports.updatePersona = updatePersona;
// Eliminar una persona
const deletePersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedPersona = yield prisma.persona.update({
            where: { id: Number(id) },
            data: { estado: 'eliminado' },
        });
        res.status(200).json(deletedPersona);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar la persona', error: error.message });
    }
});
exports.deletePersona = deletePersona;
