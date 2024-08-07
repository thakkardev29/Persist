import express from 'express';
import { buySolana } from './controllers.mjs';

const router = express.Router();

router.post('/buy-solana', buySolana);

export default router;
