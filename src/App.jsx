import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gretting from './components/Gretting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Gretting text="Hola Sebastian" isBigger={true}/>        
    </>
  )
}

export default App
