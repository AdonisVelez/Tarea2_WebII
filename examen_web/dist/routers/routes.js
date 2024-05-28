"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("../controllers/app"));
const router = express_1.default.Router();
const controlador = new app_1.default();
// Ruta para actualizar un elemento
router.put('/:entidad/:elementoId/:entornoId', controlador.putElemento);
exports.default = router;
