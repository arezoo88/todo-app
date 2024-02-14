import './App.css';
import Header from './components/share/Header';
import './assets/css/general.css'
import CreateArea from './components/general/CreateArea';
import { useState } from 'react';
import Todo from './components/general/Todo';



function App() {
  const [todos,setTodos] = useState([])
  function addTodo(newtodo){
    setTodos(prevtodo=>{
      return [...prevtodo,newtodo]
    })
  }

  function deleteTodo(id) {
    setTodos(prevTodos => {
      return prevTodos.filter((todoItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="App">
      <Header />
      <CreateArea addTodo={addTodo} />
      {todos.map((todoItem, index) => {
        return (
          <Todo
            key={index}
            id={index}
            title={todoItem.title}
            content={todoItem.content}
            onDelete = {deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default App;
