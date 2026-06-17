import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("react-todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("react-todos", JSON.stringify(todos));
  }, [todos]);

  
  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(), 
      text: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]); 
  };

  
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Task Tracker</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}