import express from 'express';
import { addSpell, getSpells } from './spells.ts';

export const router = express.Router();
router.get('/spells', getSpells);
router.post('/spells', addSpell);
