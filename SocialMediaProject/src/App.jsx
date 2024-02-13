import { useState } from 'react'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
function App() {
  const [count, setCount] = useState(0)
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div className={`px-4 py-2 ${darkMode?"dark":"light"}`}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Body/>
    </div>
  )
}

export default App
