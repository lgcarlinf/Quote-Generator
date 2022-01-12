import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [quote, setQuote] = useState('') 
  const [author, setAuthor] = useState('')
  var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  useEffect(() => {
    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data => {
      setQuote(data.content)
      setAuthor(data.author)
    })
  }, [])

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => {
        setQuote(data.content)
        setAuthor(data.author)
      })
  }

  
  var randomColor = colors[Math.floor(Math.random() * colors.length)];


  return (
    <>  
    <div className="App" style={{ backgroundColor: randomColor }}>
      <div className="box-quote">
        <h1 style={{ color: randomColor }}>{quote}</h1>
        <p style={{ color: randomColor }}>-{author}</p>
        <input style={{ backgroundColor: randomColor }} type="submit" value='New Quote' onClick={getQuote}/>
      </div>
      
    </div>
    
    </>
  )
}

export default App
