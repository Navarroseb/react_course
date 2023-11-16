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
  const [todoList, dispatch] = useReducer(todosReducer, initialState);

  console.log(todoList);

  const addTask = () => {
    dispatch({ 
      type: "add",
      payload: {
        name: "Estudiar React",
        date: new Date().toLocaleDateString(),
      }
    })
  }

    return (
    <>
     <Gretting text={"Hola!"}/>
     <button onClick={addTask}>Agregar Tarea</button>
     {/* <Form/>
     <TodoList /> */}
    </>
  );
}

export default App
