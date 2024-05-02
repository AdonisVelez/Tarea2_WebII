import { personas, encuestas, registros } from './arreglo';

// Recorrer y mostrar los elementos de los arreglos de objetos

// forEach

console.log("Recorrido usando forEach:");
personas.forEach(personas=> {
  console.log(personas);
});

console.log()

// for in
console.log("Recorrido usando for in:");
for (const index in encuestas) {
    console.log(encuestas[index]);
}


// for of

console.log("Recorrido usando for of:");
for (const Registro of registros) {
  console.log(registros);
}