import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Todo(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="todo">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Todo;