import React from "react";
import './todo.css';

const Todo = ({todo,id}) => {

    let backgroundStyle = '';
    const {text, priority} = todo;

    if(priority === 'High') {
        backgroundStyle = 'background-red';
    } else if(priority === 'Medium') {
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
      key={id}
    >
      {text}
    </li>
  );
};

export default Todo;
