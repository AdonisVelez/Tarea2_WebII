import express from 'express';
import encuestaController from '../controllers/encuestaController';

const router = express.Router();

router.get('/encuestas', encuestaController.getAllEncuestas);
router.get('/encuestas/:id', encuestaController.getEncuestaById);
router.post('/encuestas', encuestaController.createEncuesta);
router.put('/encuestas/:id', encuestaController.updateEncuesta);
router.delete('/encuestas/:id', encuestaController.deleteEncuesta);

export default router;
