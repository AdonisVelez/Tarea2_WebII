import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Controlador {
  async putElemento(req: Request, res: Response) {
    try {
      const { entidad, elementoId, entornoId } = req.params;
      
      // Verificar si la entidad existe en el esquema
      if (!['persona', 'encuesta', 'registro', 'entorno'].includes(entidad)) {
        return res.status(400).json({ error: 'La entidad proporcionada no es válida' });
      }

      // Verificar si el entorno existe en la base de datos
      const entorno = await prisma.entorno.findUnique({
        where: { id: parseInt(entornoId) }
      });
      if (!entorno) {
        return res.status(404).json({ error: 'El entorno no existe' });
      }

      // Dependiendo de la entidad, realizar la actualización
      let entidadActualizada;
      switch (entidad) {
        case 'persona':
          entidadActualizada = await prisma.persona.update({
            where: { id: parseInt(elementoId) },
            data: { entornoId: parseInt(entornoId) }
          });
          break;
        case 'encuesta':
          entidadActualizada = await prisma.encuesta.update({
            where: { id: parseInt(elementoId) },
            data: { entornoId: parseInt(entornoId) }
          });
          break;
        case 'registro':
          entidadActualizada = await prisma.registro.update({
            where: { id: parseInt(elementoId) },
            data: { entornoId: parseInt(entornoId) }
          });
          break;
        case 'entorno':
          // No tiene sentido actualizar el entorno al que pertenece
          return res.status(400).json({ error: 'No se puede actualizar el entorno de un entorno' });
      }

      // Retornar la entidad actualizada
      res.json(entidadActualizada);
    } catch (error) {
      console.error('Error al actualizar el elemento:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}

export default Controlador;
