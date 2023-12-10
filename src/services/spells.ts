import { API } from '@/services/axios.ts';

export const getSpells = () => {
  return API.get('/spells');
}

export const addSpell = () => {
  return API.post('/spells');
}
