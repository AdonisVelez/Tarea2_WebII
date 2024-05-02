"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registros = exports.encuestas = exports.personas = void 0;
exports.personas = [
    { id: 1, nombre: "Juan", identificacion: "123456789" },
    { id: 2, nombre: "María", identificacion: "987654321" },
    { id: 3, nombre: "Pedro", identificacion: "567891234" },
    { id: 4, nombre: "Ana", identificacion: "321654987" },
    { id: 5, nombre: "Luis", identificacion: "654321789" }
];
exports.encuestas = [
    { id: 1, descripcion: "Encuesta de satisfacción", detalles: "Detalles de la encuesta 1" },
    { id: 2, descripcion: "Encuesta de clima laboral", detalles: "Detalles de la encuesta 2" },
    { id: 3, descripcion: "Encuesta de producto", detalles: "Detalles de la encuesta 3" },
    { id: 4, descripcion: "Encuesta de servicio al cliente", detalles: "Detalles de la encuesta 4" },
    { id: 5, descripcion: "Encuesta de calidad", detalles: "Detalles de la encuesta 5" }
];
exports.registros = [
    { id: 1, idPersona: 1, idEncuesta: 1, fecha: "2024-04-25", hora: "10:00", ubicacion: "Oficina principal" },
    { id: 2, idPersona: 2, idEncuesta: 2, fecha: "2024-04-26", hora: "11:30", ubicacion: "Sucursal 1" },
    { id: 3, idPersona: 3, idEncuesta: 3, fecha: "2024-04-27", hora: "09:15", ubicacion: "Sucursal 2" },
    { id: 4, idPersona: 4, idEncuesta: 4, fecha: "2024-04-28", hora: "13:45", ubicacion: "Centro comercial" },
    { id: 5, idPersona: 5, idEncuesta: 5, fecha: "2024-04-29", hora: "15:20", ubicacion: "Online" }
];
