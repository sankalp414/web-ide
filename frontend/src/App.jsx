import { useState } from 'react'
import './App.css'
import  Terminal  from './components/Terminal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Terminal/>
      </div>
      
    </div>
  )
}

export default App
