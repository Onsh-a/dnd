import mongoose from 'mongoose';

const spellSchema = new mongoose.Schema({
  id: String,
  name: String,
  link: String,
  level: String,
  type: String,
  distance: String,
  duration: String,
  description: String,
})

export const SpellModel = mongoose.model('Spell', spellSchema, 'spells');
