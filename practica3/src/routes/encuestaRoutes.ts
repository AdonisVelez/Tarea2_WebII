import { Router } from 'express';
import { getAllEncuestas, getEncuestaById, createEncuesta, updateEncuesta, deleteEncuesta } from '../controllers';

const router = Router();

router.get('/', getAllEncuestas);
router.get('/:id', getEncuestaById);
router.post('/', createEncuesta);
router.put('/:id', updateEncuesta);
router.delete('/:id', deleteEncuesta);

export default router;
