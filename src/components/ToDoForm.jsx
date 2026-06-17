import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents full-page browser reload
    if (!input.trim()) return; // Ignored if the input is empty or just spaces

    addTodo(input); // Passes the text back up to App.jsx
    setInput("");   // Resets the input field
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}