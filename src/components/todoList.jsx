import React from "react";
import Todo from "./todo";

const TodoList = (data) => {
    console.log("data:", data);
  return (
    <div>
      <ul style={{ margin: "auto", width: "100%" }}>
        {data.props.map((todo, id) => (
            <Todo todo={todo} key={id} id={id}></Todo>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
