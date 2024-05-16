import express from 'express';
import personaRoutes from './personaRoutes';
import encuestaRoutes from './encuestaRoutes';
import registroRoutes from './registroRoutes';

const router = express.Router();

// Rutas para la entidad Persona
router.use('/personas', personaRoutes);

// Rutas para la entidad Encuesta
router.use('/encuestas', encuestaRoutes);

// Rutas para la entidad Registro
router.use('/registros', registroRoutes);

export default router;
