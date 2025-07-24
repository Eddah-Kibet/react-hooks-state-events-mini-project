import React from "react";
import { CATEGORIES } from "../data";

function Task() {
  return (
    <div className="task">
      <div className="label">{CATEGORIES}</div>
      <div className="text">{Task.text}</div>
      <button className="delete" onClick={Task.onDelete}>delete</button>
    </div>
  );
}

export default Task;

