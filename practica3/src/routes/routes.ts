import express from 'express';
import personaRoutes from './personaRoutes';
import encuestaRoutes from './encuestaRoutes';
import registroRoutes from './registroRoutes';

const router = express.Router();

router.use('/personas', personaRoutes);
router.use('/encuestas', encuestaRoutes);
router.use('/registros', registroRoutes);


export default router;
