"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encontrarPersonaPorID = void 0;
// Archivo: utils.ts
const arreglo_1 = require("./arreglo");
function encontrarPersonaPorID(id, callback) {
    const personaEncontrada = arreglo_1.personas.find(persona => persona.id === id);
    if (personaEncontrada) {
        callback(personaEncontrada);
    }
    else {
        console.log("No se encontró ninguna persona con ese ID.");
    }
}
exports.encontrarPersonaPorID = encontrarPersonaPorID;
