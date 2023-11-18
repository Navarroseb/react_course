import React from 'react'

const TodoList = ({ todoList }) => {
  return (
    <>
      <h4>Listado de Tareas</h4>
      <ol>
        {todoList.map((todo, i) => {
          return <li key={i}> {`${todo.name} - ${todo.date}`} </li>
        })}
      </ol>
    </>
  )
}

export default TodoList