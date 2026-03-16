import { useState } from 'react';
export default function TodoForm({addTodo}){
    const [text, setText] = useState('');
    function handleAddTodo(){
        if(text.trim() === '') return;
        addTodo(text.trim());
        setText('');
    }

    return(<>
      <input type="text" placeholder="Enter a new todo..." value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={handleAddTodo}>add</button>
    </>)
}