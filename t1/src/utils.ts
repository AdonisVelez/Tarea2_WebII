// Archivo: utils.ts
import { personas } from './arreglo';

export function encontrarPersonaPorID(id: number, callback: (persona: any) => void) {
  const personaEncontrada = personas.find(persona => persona.id === id);
  if (personaEncontrada) {
    callback(personaEncontrada);
  } else {
    console.log("No se encontró ninguna persona con ese ID.");
  }
}
