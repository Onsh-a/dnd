import { VoidFunc } from '@/types/common.ts';

export interface Tab {
  id: number,
  name: string
}

export interface TabsProps {
  currentTabId: number,
  setCurrentTabId: VoidFunc<number>,
}
