import React from "react";
import "../index.css";

function Joke(props) {
  return (
    <div
      style={{
        color: props.question ? "#222" : "#767"
      }}
      className="contact-card"
    >
      <h3
        style={{
          display: props.question ? "block" : "none"
        }}
      >
        Question: {props.question}
      </h3>
      <h3
        style={{
          display: props.punchLine ? "block" : "none"
        }}
      >
        Answer: {props.punchLine}
      </h3>
    </div>
  );
}

export default Joke;
