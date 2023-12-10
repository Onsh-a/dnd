import { VoidFunc } from '@/types/common.ts';

export interface Tab {
  id: number,
  name: string
}

export interface TabsProps {
  currentTabId: number,
  setCurrentTabId: VoidFunc<number>,
}

export interface MainProps {
  character: Character
}

export interface AbilityScoresProps {
  character: Character
}

export interface SpellsProps {
  character: Character
}

export interface Character {
  name: string,
  class: string,
  race: string,
  experience: number,
  level: number,
  speed: number,
  armour: number,
  knownSpellsIds: number[],
  stats: Stats
}

export interface Stats {
  strength: number,
  dexterity: number,
  constitution: number,
  intelligence: number,
  wisdom: number,
  charisma: number,
}
