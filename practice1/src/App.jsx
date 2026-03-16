import { useState } from 'react'
import './App.css'
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {
const [Todo, setTodo] = useState([]);

function addTodo(newTodo){
  setTodo([...Todo, {id: Date.now(), text: newTodo, completed: false}]);
}

function onDelete(id){
  setTodo(Todo.filter((todo) => todo.id !== id));
}

  return (
    <>
      <TodoForm addTodo={addTodo} />

      <TodoList todos={Todo} onDelete={onDelete} />
    </>
  );
}

export default App
