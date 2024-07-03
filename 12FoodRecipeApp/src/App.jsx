import { useState } from 'react'
import Home from './components/home'
import Header from './components/header'
import { Outlet } from 'react-router-dom'
import { RecpProvider } from './context/context'
import { useNavigate } from 'react-router-dom'
function App() {
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  

  return (
    <>
      <RecpProvider value={{ search, setSearch, id, setId}}>
        <Header />
        <Outlet />
      </RecpProvider>
    </>
  )
}

export default App
