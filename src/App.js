import "./styles.css";
import { useEffect, useState } from "react";
import TodoList from "./components/todoList";

export default function App() {
  const data = [
    { text: "Coding", priority: "High" },
    { text: "Cooking", priority: "Medium" },
    { text: "Watching Movie", priority: "Low" },
  ];

  return (
    <div className="App">
      <h1>My ToDo List</h1>
      <TodoList props={data}></TodoList>
    </div>
  );
}
