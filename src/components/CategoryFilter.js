import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(...TASKS)
  const [selectedCategory,setSelectedCategory] = useState("All")
  const categories = ["All", "Code", "Food", "Money", "Misc"];

  const deleteTask = (taskText) => {
    setTasks(tasks.filter(task => task.text !== taskText ))
  }

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const filteredTasks= selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onselectedCategory={setSelectedCategory}
      />
      <NewTaskForm 
        categories={categories}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={deleteTask}/>
    </div>
  );
}

export default App;
