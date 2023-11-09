import { useState } from 'react'
import './App.css'
import Gretting from './components/Gretting'


import USERS_DATA from "./data//users.json";
import Users from './components/Users';
import Counter from './components/Counter';



function App() {
    return (
    <>
     <Gretting text={"Hola!"}/>
     <Counter subject="React" developerName="Jane"/>
     <Users usersList={USERS_DATA} />
    </>
  );
}

export default App
