export default function TodoList({todos, onDelete}){

      if (todos.length === 0) return <p>No todos yet. Add one above!</p>;

    return (
      <>
        {todos.map((todo) => (
          <>
            <li key={todo.id}>{todo.text}</li>{""} <button onClick={() => onDelete(todo.id)}>Delete</button>
          </>
        ))}
      </>
    );
}