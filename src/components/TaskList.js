import React from "react";
import Task from "./Task";

function TaskList() {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <Task
        key={Task.index}
        text={Task.text}
        category={Task.category}
        onDelete={Task.onDeleteTask}
        />
    </div>
  );
}

export default TaskList;
