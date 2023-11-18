import React from 'react'

const Form = ({ addTask }) => {

  const submitHandler = (e) => {
      e.preventdefault()
  }

  const changeColor = () => {
    if (icon === Black){
      return white
    }
  }

  return (
    <form onSubmit={submitHandler}>
        <input type="text" />
        <button type='submit'>Agregar</button>
    </form>
  )
}

export default Form