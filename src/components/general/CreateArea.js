import { Fab } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';


export default function CreateArea(props) {
    const [task,setTask] = useState({title: "",content: ""})
    function handleChange(event) {
        const { name, value } = event.target;
    
        setTask(prevTodo=> {
          return {
            ...prevTodo,
            [name]: value
          };
        });
      }
    
    function submitTask(e){
        
        props.addTodo(task)
        setTask({
            title: "",content: ""
        })

    }
  return (
    <div>
        <form className='create-todo'>
            <input name='title' type='text' placeholder='title' value={task.title} onChange={handleChange}/>
            <textarea name='content' rows="3" placeholder='Take a todo...' value={task.content} onChange={handleChange}/>
            <Fab onClick={submitTask}>
                <AddIcon />
            </Fab>
        </form>
    </div>
  )
}
