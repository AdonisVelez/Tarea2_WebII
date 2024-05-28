import express from 'express';
import Controlador from '../controllers/app';

const router = express.Router();
const controlador = new Controlador();

// Ruta para actualizar un elemento
router.put('/:entidad/:elementoId/:entornoId', controlador.putElemento);

export default router;
