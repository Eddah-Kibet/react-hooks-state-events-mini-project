import React, {useState} from "react";

function NewTaskForm({categories, onTaskFomSubmit}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1] || "")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === "") return;
  
    const newTask = {
      text: text.trim(),
      category,
    }

    onTaskFomSubmit(newTask);
    setText("");
    setCategory(categories[1] || "")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          placeholder="New task"
          />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories
          .filter(cat=> cat !== "All")
          .map(cat => (
            <option ket={cat} value={cat}>
              {cat}
            </option>
          ))
          }

        </select>
          
      
          
      </label>
      <input type="submit" value="Add task">Add task</input>
    </form>
  );
}

export default NewTaskForm;
