import { Fab } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

export default function CreateArea(props) {
    const [task,setTask] = useState({title: "",content: ""})
    const [isExpanded, setExpanded] = useState(false);

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
        if(task.title!=='' && task.content!==''){
            props.addTodo(task)
            setTask({
                title: "",content: ""
            })
        }
    }
    function expand() {
        setExpanded(true);
      }
  return (
    <div>
        <form className='create-todo'>
            {isExpanded && (
                            <input name='title' 
                            type='text' 
                            placeholder='title' 
                            value={task.title} 
                            onChange={handleChange}
                        />
            )}

            <textarea name='content' 
                rows={isExpanded?3:1}
                placeholder='Take a todo...'
                onClick={expand}
                value={task.content} 
                onChange={handleChange}
            />
            <Zoom in={isExpanded}>
                <Fab onClick={submitTask}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
    </div>
  )
}
