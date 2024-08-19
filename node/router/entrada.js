import express from 'express';

import { getRegistro, addRegistro, getRegistroEntrada, getRegistroSaida } from '../controllers/entrada.js';

const router = express.Router();

router.get('/', getRegistro);
router.get('/entrada', getRegistroEntrada);
router.get('/saida', getRegistroSaida);
router.post('/', addRegistro);



export default router;