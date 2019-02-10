import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Cube() {
  return (
    <div className="App">
      <Wall />
      <Wall />
      <Wall />
      <Wall />
      <Wall />
      <Wall />

    </div>
  );
}

function Wall()
{
  return (
    <div>
      <div>
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div>
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div>
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  )
}

function Cell()
{
  return (
    <span>A</span>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Cube />, rootElement);
