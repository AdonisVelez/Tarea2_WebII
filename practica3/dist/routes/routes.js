"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const personaRoutes_1 = __importDefault(require("./personaRoutes"));
const encuestaRoutes_1 = __importDefault(require("./encuestaRoutes"));
const registroRoutes_1 = __importDefault(require("./registroRoutes"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('¡Bienvenido a la aplicación!');
});
router.use('/personas', personaRoutes_1.default);
router.use('/encuestas', encuestaRoutes_1.default);
router.use('/registros', registroRoutes_1.default);
exports.default = router;
