import './Sheet.module.scss';
import Tabs from '@/components/ui/Tabs/Tabs.tsx';
import { useState } from 'react';
import Main from '@/components/Main/Main.tsx';
import Spells from '@/components/Spells/Spells.tsx';
import Stats from '@/components/Stats/Stats.tsx';

const Sheet = () => {
  const [currentTabId, setCurrentTabId] = useState(1)

  return (
    <>
      <Tabs
        currentTabId={currentTabId}
        setCurrentTabId={setCurrentTabId}
      />
      {currentTabId === 1 && <Main/>}
      {currentTabId === 2 && <Stats/>}
      {currentTabId === 3 && <div>3</div>}
      {currentTabId === 4 && <Spells/>}
    </>
  )
}

export default Sheet
