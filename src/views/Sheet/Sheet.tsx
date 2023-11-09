import './Sheet.module.scss';
import Tabs from '@/components/ui/Tabs/Tabs.tsx';
import { useState } from 'react';
import Main from '@/components/Main/Main.tsx';

const Sheet = () => {
  const [currentTabId, setCurrentTabId] = useState(1)

  return (
    <>
      <Tabs
        currentTabId={currentTabId}
        setCurrentTabId={setCurrentTabId}
      />
      {currentTabId === 1 && <Main />}
      {currentTabId === 2 && <div>2</div>}
      {currentTabId === 3 && <div>3</div>}
      {currentTabId === 4 && <div>4</div>}
    </>
  )
}

export default Sheet
