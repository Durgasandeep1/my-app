import logo from './logo.svg';
import './App.css';
import React from "react"
import Todolist from "./todolist"
import { directive } from '@babel/types';

function App(){
  return (
    <div id='divmain'>
      <div className='mainbody'>
      <h1>Welcome to To-Do List</h1>
      <Todolist></Todolist>
    </div>
    </div>
  )
}

export default App;