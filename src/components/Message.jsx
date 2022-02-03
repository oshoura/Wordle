import React from "react";
import "./styles/Letter.css";

function Message(props) {
  return (
    <div className="message-container">
      <p>{props.children}</p>
    </div>
  );
}

export default Message;
