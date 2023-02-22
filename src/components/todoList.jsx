import React from "react";
import Todo from "./todo";

const TodoList = ({ data, onRemoveTodo }) => {
  return (
    <div>
      <ul style={{ margin: "auto", width: "100%" }}>
        {data.map((todo, id) => (
          <Todo todo={todo} key={id} id={id} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
