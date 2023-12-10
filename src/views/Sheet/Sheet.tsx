import './Sheet.module.scss';
import Tabs from '@/components/ui/Tabs/Tabs.tsx';
import { useEffect, useState } from 'react';
import Main from '@/components/Main/Main.tsx';
import Spells from '@/components/Spells/Spells.tsx';
import AbilityScores from '@/components/AbilityScores/AbilityScores.tsx';
import { character } from '@/data/mock.ts';
import { getSpells } from '@/services/spells.ts';

const Sheet = () => {
  const [currentTabId, setCurrentTabId] = useState(1)

  const temp = async () => {
    const response = await getSpells();
    console.log(response.data);
  }

  useEffect(() => {
    temp();
  }, [temp]);

  return (
    <>
      <Tabs
        currentTabId={currentTabId}
        setCurrentTabId={setCurrentTabId}
      />
      {currentTabId === 1 && <Main character={character} />}
      {currentTabId === 2 && <AbilityScores character={character} />}
      {currentTabId === 3 && <div>3</div>}
      {currentTabId === 4 && <Spells character={character}/>}
    </>
  )
}

export default Sheet
