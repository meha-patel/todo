import React from "react";
import "./todo.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ todo, id, onRemoveTodo }) => {
  let backgroundStyle = "";
  const { text, priority } = todo;
  if (priority === "High") {
    backgroundStyle = "background-red";
  } else if (priority === "Medium") {
    backgroundStyle = "background-yellow";
  } else {
    backgroundStyle = "background-green";
  }

  return (
    <li
      style={{
        border: "1px solid black",
        padding: "4px",
        width: "400px",
        marginBottom: "6px",
        textAlign: "left",
        paddingLeft: "70px",
      }}
      className={backgroundStyle}
      key={id}
    >
      {text}
      <DeleteIcon
        style={{ float: "right", cursor: "pointer", paddingRight: "10px" }}
        onClick={onRemoveTodo.bind(this, todo.id)}
      />
      {/* <DeleteIcon
        style={{ float: "right", cursor: "pointer", paddingRight: "10px" }}
        onClick={() => onRemoveTodo(todo.id)}
      /> */}
    </li>
  );
};

export default Todo;
