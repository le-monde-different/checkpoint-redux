/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,deleteTodo } from './actions/todoAction';
import './App.css';


function App() {
  const [task,setTask]=useState("")
const todos=useSelector(state=>state.todoReducer)
const dispatch=useDispatch()
  return (
    <div className="App">
      
        <input type="text" placeholder='add task' onChange={(e)=>setTask(e.target.value)}/>
        
        <button onClick={()=>dispatch(addTodo(task))}>add task</button>
      {todos.map(el=><div>
        <h1>{el.title}</h1>
        <button onClick={()=>dispatch(deleteTodo(el.id))}>delete task</button>
        <button onClick={()=>dispatch(completeTodo(el.id))}>complete</button>

       
        </div>)}
        
    </div>
  );
}

export default App;
