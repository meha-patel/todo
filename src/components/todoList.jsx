import React from "react";

const TodoList = (data) => {
    console.log("data:", data);
  return (
    <div>
      <ul style={{ margin: "auto", width: "100%" }}>
        {data.props.map((todo, id) => (
          // let color;
          // if (todo.priority === "High") {
          //   color = "red";
          // } else if (todo.priority === "Medium") {
          //   color = "yellow";
          // } else {
          //   color = "green";
          // }
          <li
            style={{
              border: "1px solid black",
              padding: "4px",
              width: "400px",
              marginBottom: "6px",
            }}
            className={"background-red"}
            key={id}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
