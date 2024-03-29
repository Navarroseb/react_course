import {useState} from 'react'

const Form = ({ addTask }) => {
  const [inputText, setInputText] = useState("");
  
  const submitHandler = (e) => {
      e.preventdefault();
      addTask(inputText)
  }

  return (
    <form onSubmit={e => submitHandler(e)}>
        <input type="text" onChange={e => setInputText(e.currentTarget.value)}/>
        <button type='submit'>Agregar</button>
        

    </form>
  )
}

export default Form