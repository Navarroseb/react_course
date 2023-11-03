import { useState } from 'react'
import './App.css'
import Gretting from './components/Gretting'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Gretting text="Hola Sebastian" isBigger={true}/>     
     <Button text="Click me" />
     <Gretting text="Hello World">
        <hr />
        <strong>I'm a children tag</strong>
        <h5>Children h5</h5>
      </Gretting>   
    </>
  )
}

export default App
