import { useState } from 'react'
import './App.css'
import Gretting from './components/Gretting'


import USERS_DATA from "./data//users.json";
import Users from './components/Users';


function App() {
    return (
    <>
     <Gretting text="Trabajando con React!"/>
     <Users usersList={USERS_DATA} />
    </>
  );
}

export default App
