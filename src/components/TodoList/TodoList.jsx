import React from 'react'

const TodoList = ({todoList}) => {
  return (
    <>
    <h4>Listado de Tareas</h4>
    {todoList.map((todo, i) => {
      return <li key={i}> {`${todo.name} - ${todo.date}`} </li>
    })}
    </>
  )
}

export default TodoList