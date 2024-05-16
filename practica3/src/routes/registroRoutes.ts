import express from 'express';
import registroController from '../controllers/registroController';

const router = express.Router();

router.get('/registros', registroController.getAllRegistros);
router.get('/registros/:id', registroController.getRegistroById);
router.post('/registros', registroController.createRegistro);
router.put('/registros/:id', registroController.updateRegistro);
router.delete('/registros/:id', registroController.deleteRegistro);

export default router;
