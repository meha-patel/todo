import "./styles.css";
import { useEffect, useState } from "react";
import TodoList from "./components/todoList";

export default function App() {
  const data = [
    { text: "Coding", priority: "High" },
    { text: "Cooking", priority: "Medium" },
    { text: "Watching Movie", priority: "Low" },
  ];
  const [todoList, setTodoList] = useState(data);
  const [todoText, setTodoText] = useState("");
  const [todoPriority, setTodoPriority] = useState("");

  // const addTodo = () => {
  //   const dupTodo = [...todoList];
  //   dupTodo.push({ text: todoText, priority: todoPriority });
  //   setTodoList(dupTodo);
  // };

  const addTodo = () => {
    setTodoList([...todoList,{ text: todoText, priority: todoPriority }]);
  };

  return (
    <div className="App">
      <h1>My ToDo List</h1>
      <TodoList data={todoList}></TodoList>
      <input
        type="text"
        value={todoText}
        placeholder="New todo..."
        onChange={(e) => setTodoText(e.target.value)}
      />
      <br />
      <br />
      <select
        onChange={(e) => setTodoPriority(e.target.value)}
        value={todoPriority}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <br />
      <br />
      <button onClick={addTodo}>Save</button>
    </div>
  );
}
