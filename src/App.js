import "./styles.css";
import { useEffect, useState } from "react";
import TodoList from "./components/todoList";

export default function App() {
  const data = [
    { text: "Coding", priority: "High", id: 1 },
    { text: "Cooking", priority: "Medium", id: 2 },
    { text: "Watching Movie", priority: "Low", id: 3 },
  ];
  const [todoList, setTodoList] = useState(data);
  const [todoText, setTodoText] = useState("");
  const [todoPriority, setTodoPriority] = useState("");

  const addTodoHandler = () => {
    setTodoList([
      ...todoList,
      {
        text: todoText,
        priority: todoPriority,
        id: todoList[todoList.length - 1].id + 1,
      },
    ]);
  };

  const removeTodoHandler = (id) => {
    if (id) {
      console.log("id:", id);
      const removeItem = todoList.filter((todo) => {
        return todo.id !== id;
      });
      setTodoList(removeItem);
    }
  };

  return (
    <div className="App">
      <h1>My ToDo List</h1>
      <TodoList data={todoList} onRemoveTodo={removeTodoHandler} />
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
      <button onClick={addTodoHandler}>Save</button>
    </div>
  );
}
