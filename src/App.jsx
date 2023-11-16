import { useState } from 'react'
import './App.css'
import Gretting from './components/Gretting'
import UserClassComponent from './components/UserClassComponent';
import UsersHook from './components/UsersHook';
import Form from './components/TodoList/Form';


function App() {
    return (
    <>
     <Gretting text={"Hola!"}/>
     <Form/>
    </>
  );
}

export default App
