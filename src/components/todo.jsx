import React from "react";
import './todo.css';

const Todo = (props) => {
    console.log("data todo:", props.todo);
    let backgroundStyle = '';
    if(props.todo.priority === 'High') {
        backgroundStyle = 'background-red';
    } else if(props.todo.priority === 'Medium') {
        backgroundStyle = 'background-yellow';
    } else {
        backgroundStyle = 'background-green';
    }
  return (
    <li
      style={{
        border: "1px solid black",
        padding: "4px",
        width: "400px",
        marginBottom: "6px",
      }}
      className={backgroundStyle}
      key={props.id}
    >
      {props.todo.text}
    </li>
  );
};

export default Todo;
