import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [quote, setQuote] = useState({});
  const [quotes, setQuotes] = useState([]);

  function genrateQuote(){
    
    let random = randomNumber();
    setQuote(quotes[random])
    console.log(typeof quote)
  }

  useEffect(()=>{
    async function fetchdata(){
      let res = await fetch("https://type.fit/api/quotes");
    let result = res.json();
    result.then((response)=>{setQuotes(response)})
    let random = randomNumber();
    setQuote(quotes[random])
    console.log(quotes)
    }
    fetchdata();
  },[])

  function randomNumber(){
    return Math.floor(Math.random()*quotes.length)
  }
  return (
    <>
      <h1>Project 1 Random Quote Generator</h1>
      <div > //box
          <p>Quote : {quote?.text}</p>
          <p>Author : {quote?.author}</p>
      </div>
      <button onClick={genrateQuote}>New Quote</button>
    </>
  )
}

export default App
