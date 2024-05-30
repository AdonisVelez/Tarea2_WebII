import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Controlador {
  async putElemento(req: Request, res: Response) {
    try {
      const { entidad, elementoId } = req.params;
      const { entornoId } = req.body;

      // Verificar si la entidad existe en el esquema
      if (!['persona', 'encuesta', 'registro'].includes(entidad)) {
        return res.status(400).json({ error: 'La entidad proporcionada no es válida' });
      }

      // Verificar si el entorno existe en la base de datos
      const entornoExistente = await prisma.entorno.findUnique({
        where: { id: parseInt(entornoId) }
      });
      if (!entornoExistente) {
        return res.status(404).json({ error: 'El entorno no existe' });
      }

      // Actualizar el entorno del elemento
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
        default:
          return res.status(400).json({ error: 'Entidad no reconocida' });
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
