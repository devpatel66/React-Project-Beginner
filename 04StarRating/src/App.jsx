import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rating from './Rating'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Rating noOfStars={10}/>
    </>
  )
}

export default App
