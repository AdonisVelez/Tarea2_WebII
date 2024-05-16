import express from 'express';
import personaController from '../controllers/personaController';

const router = express.Router();

router.get('/personas', personaController.getAllPersonas);
router.get('/personas/:id', personaController.getPersonaById);
router.post('/personas', personaController.createPersona);
router.put('/personas/:id', personaController.updatePersona);
router.delete('/personas/:id', personaController.deletePersona);

export default router;
