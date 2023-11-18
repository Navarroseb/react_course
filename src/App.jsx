import { useReducer } from 'react'
import './App.css'
import Gretting from './components/Gretting'
import UserClassComponent from './components/UserClassComponent';
import UsersHook from './components/UsersHook';
import Form from './components/TodoList/Form';
import TodoList from './components/TodoList/TodoList';

const initialState = [];

const todosReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
}



function App() {
  const [todoListState, dispatch] = useReducer(todosReducer, initialState);

  console.log(todoListState)

  const addTaskHandler = (text) => {
    dispatch({
      type: "add",
      payload: {
        name: text,
        date: new Date().toLocaleDateString(),
      }
    })
  }

  return (
    <>
      <Gretting text={"Hola!"} />
      <button onClick={addTaskHandler}>Agregar Tarea</button>
      <Form addTask={addTaskHandler}/>
      <TodoList todoList={todoListState} />
    </>
  );
}

export default App
