import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Obtener todos los registros
const getAllRegistros = async (req: Request, res: Response) => {
  try {
    const registros = await prisma.registro.findMany();
    res.status(200).json(registros);
  } catch (error: any) {
    res.status(500).json({ message: 'Error al obtener los registros', error: error.message });
  }
};

// Obtener un registro por su ID
const getRegistroById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const registro = await prisma.registro.findUnique({ where: { id: Number(id) } });
    if (!registro) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }
    res.status(200).json(registro);
  } catch (error: any) {
    res.status(500).json({ message: 'Error al obtener el registro', error: error.message });
  }
};

// Crear un nuevo registro
const createRegistro = async (req: Request, res: Response) => {
  const { fecha, hora, ubicacion, personaId, encuestaId } = req.body;
  try {
    const registro = await prisma.registro.create({
      data: { fecha, hora, ubicacion, personaId, encuestaId },
    });
    res.status(201).json(registro);
  } catch (error: any) {
    res.status(500).json({ message: 'Error al crear el registro', error: error.message });
  }
};

// Actualizar un registro existente
const updateRegistro = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { fecha, hora, ubicacion, personaId, encuestaId, estado } = req.body; 
    try {
      const updatedRegistro = await prisma.registro.update({
        where: { id: Number(id) },
        data: { fecha, hora, ubicacion, personaId, encuestaId, estado },
      });
      res.status(200).json(updatedRegistro);
    } catch (error: any) {
      res.status(500).json({ message: 'Error al actualizar el registro', error: error.message });
    }
  };

// Eliminar un registro
const deleteRegistro = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedRegistro = await prisma.registro.update({
      where: { id: Number(id) },
      data: { estado: 'eliminado' },
    });
    res.status(200).json(deletedRegistro);
  } catch (error: any) {
    res.status(500).json({ message: 'Error al eliminar el registro', error: error.message });
  }
};

export default { getAllRegistros, getRegistroById, createRegistro, updateRegistro, deleteRegistro };
