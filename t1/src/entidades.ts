// Definición de las entidades

export interface Persona {
  id: number;
  nombre: string;
  identificacion: string;
}

export interface Encuesta {
  id: number;
  descripcion: string;
  detalles: string;
}

export interface Registro {
  id: number;
  idPersona: number;
  idEncuesta: number;
  fecha: string;
  hora: string;
  ubicacion: string;
}

