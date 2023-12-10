import { Character, Tab } from '../types/types.ts';

export const sheetTabs: Tab[] = [
  { name: 'Главная', id: 1 },
  { name: 'Характеристики', id: 2 },
  { name: 'Инвентарь', id: 3 },
  { name: 'Способности', id: 4 }
]

export const character: Character = {
  name: 'Хеффин',
  class: 'Следопыт',
  race: 'Полурослик',
  experience: 3620,
  level: 4,
  speed: 25,
  armour: 14,
  knownSpellsIds: [1, 8, 5],
  stats: {
    strength: 8,
    dexterity: 17,
    constitution: 13,
    intelligence: 10,
    wisdom: 14,
    charisma: 13,
  }
}
