import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Obtener todas las encuestas
export const getAllEncuestas = async (req: Request, res: Response) => {
  try {
    const encuestas = await prisma.encuesta.findMany({
      where: {
        estado: {
          not: "eliminado"
        }
      }
    });
    res.status(200).json(encuestas);
  } catch (error: any) {
    res.status(500).json({ message: 'Error al obtener las encuestas', error: error.message });
  }
};

// Obtener una encuesta por su ID
export const getEncuestaById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const encuesta = await prisma.encuesta.findUnique({ where: { id: Number(id) } });
    if (!encuesta || encuesta.estado === 'eliminado' ) {
      return res.status(404).json({ message: 'Encuesta no encontrada' });
    }
    res.status(200).json(encuesta);
  } catch (error: any) {
    res.status(500).json({ message: 'Error al obtener la encuesta', error: error.message });
  }
};

// Crear una nueva encuesta
export const createEncuesta = async (req: Request, res: Response) => {
  const { descripcion, detalles } = req.body;
  try {
    const encuesta = await prisma.encuesta.create({
      data: { descripcion, detalles },
    });
    res.status(201).json(encuesta);
  } catch (error: any) {
    res.status(500).json({ message: 'Error al crear la encuesta', error: error.message });
  }
};

// Actualizar una encuesta existente
export const updateEncuesta = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { descripcion, detalles } = req.body;
  try {
    const updatedEncuesta = await prisma.encuesta.update({
      where: { id: Number(id) },
      data: { descripcion, detalles },
    });
    res.status(200).json(updatedEncuesta);
  } catch (error: any) {
    res.status(500).json({ message: 'Error al actualizar la encuesta', error: error.message });
  }
};

// Eliminar una encuesta
export const deleteEncuesta = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedEncuesta = await prisma.encuesta.update({
      where: { id: Number(id) },
      data: { estado: 'eliminado' },
    });
    res.status(200).json(deletedEncuesta);
  } catch (error: any) {
    res.status(500).json({ message: 'Error al eliminar la encuesta', error: error.message });
  }
};
