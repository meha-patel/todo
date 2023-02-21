import React from "react";

export default function (props) {
  console.log(props);
  return (
    <button
      style={{ padding: "10px", backgroundColor: "greenyellow" }}
      disabled={props.isDisabled}
      onClick={props.buttonHandler}
    >
      {props.children}
    </button>
  );
}
