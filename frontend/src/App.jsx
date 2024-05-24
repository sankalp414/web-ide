import { useState } from 'react'
import './App.css'
import  Terminal  from './components/Terminal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='playground-container'>
      <div className='editor-container'>
        <Terminal className= "terminal-container"/>
      </div>
      
    </div>
  )
}

export default App
