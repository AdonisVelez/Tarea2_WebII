"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arreglo_1 = require("./arreglo");
// Recorrer y mostrar los elementos de los arreglos de objetos
// forEach
console.log("Recorrido usando forEach:");
arreglo_1.personas.forEach(personas => {
    console.log(personas);
});
console.log();
// for in
console.log("Recorrido usando for in:");
for (const index in arreglo_1.encuestas) {
    console.log(arreglo_1.encuestas[index]);
}
// for of
console.log("Recorrido usando for of:");
for (const Registro of arreglo_1.registros) {
    console.log(arreglo_1.registros);
}
