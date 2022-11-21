/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,deleteTodo,completeTodo,editTodo } from './actions/todoAction';
import {Modal,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [task,setTask]=useState("")
  const [editTask,seteditTask]=useState("")

  const [filter,setFilter]=useState("all")

const todos=useSelector(state=>state.todoReducer)
const dispatch=useDispatch()
  return (
    <div className="App">
      
      <input type="text" placeholder='add task' onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={()=>dispatch(addTodo(task))}>add task</button>
        <button onClick={()=>setFilter("all")}>all</button>
        <button onClick={()=>setFilter("done")}>done</button>
        <button onClick={()=>setFilter("undone")}>undone</button>

      {filter==="all" ?
      todos.map(el=><div>
        <h1>{el.title}</h1>
        
        <Button variant="primary" onClick={handleShow}>
        edit 
      </Button>
      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body><input type="text" placeholder='edit task' onChange={(e)=>seteditTask(e.target.value)}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{dispatch(editTodo(editTask));handleClose()}}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
      <button onClick={()=>dispatch(deleteTodo(el.id))}>delete task</button>
      <button onClick={()=>dispatch(completeTodo(el.id))}>{el.complete ? "done":"undone"}</button>
        </div>):filter==="done"? todos.filter(el=>el.complete===true)
        
        .map(el=><div>
          <h1>{el.title}</h1>
          <button onClick={()=>dispatch(deleteTodo(el.id))}>delete task</button>
          <button onClick={()=>dispatch(completeTodo(el.id))}>{el.complete ? "done":"undone"}</button>
          </div>):todos.filter(el=>el.complete===false)

        .map(el=><div>
        <h1>{el.title}</h1>
        <button onClick={()=>dispatch(deleteTodo(el.id))}>delete task</button>
        <button onClick={()=>dispatch(completeTodo(el.id))}>{el.complete ? "done":"undone"}</button>
        </div>)
      } 
    </div>
         );
}


export default App;
