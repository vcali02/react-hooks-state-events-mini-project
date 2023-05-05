import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const [tasks, setTasks]=useState(TASKS)
  const [selectedCategory, setSelectedCategory]=useState("All")

  
  function handleDelete(task){
    const taskFilter = [...tasks].filter(el => {
      // if el.text does not equal task.text then
      //it will return true, which means we will
      //want to keep it in the array
      return el.text !== task.text
    })
    setTasks(taskFilter) //
  }


function handleCategoryChange(cat){
  setSelectedCategory(cat)

}


function addNewTask(task){
  setTasks([...tasks, task]) //instead of prevtasks....
}




let filteredTasks= [...tasks].filter(el => {
  //if current task category ===category passed in
  //if current category passed in is "all"
  return el.category === selectedCategory || selectedCategory === "All"
})





  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selectedCategory} handleCategoryChange= {handleCategoryChange} categories={CATEGORIES}/>
      <NewTaskForm addNewTask={addNewTask} categories={CATEGORIES}/>
      <TaskList tasks={filteredTasks} handleDelete= {handleDelete}/>
    </div>
  );
}

export default App;
