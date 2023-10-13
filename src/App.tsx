
import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import './App.css'
import {PageOne, PageThree, PageTwo} from './Page'
import { useEffect } from 'react'

function App() {
  const { ref, focusKey, focusSelf } = useFocusable()

  useEffect(() => {
    focusSelf()
  }, [focusSelf])

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref}>
        <PageOne />
        <PageTwo />
        <PageThree />
      </div>
    </FocusContext.Provider>
    
  );
}

export default App
