import React from 'react'

const Form = ({ addTask }) => {

  const submitHandler = (e) => {
      e.preventdefault()
  }

 

  return (
    <form onSubmit={submitHandler}>
        <input type="text" />
        <button type='submit'>Agregar</button>
    </form>
  )
}

export default Form