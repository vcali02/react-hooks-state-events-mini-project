import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDelete}) {
  console.log(tasks)

  // const taskArr= 

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {
        tasks.map((el, i) => {
          return <Task key={i} task={el} handleDelete= {handleDelete}/>
        })
      }
    </div>
  );
}

export default TaskList;


// {/* {tasks.map(task => ( */}
// <Task key={tasks} category={tasks[1]} text={tasks[0]}/>
// {/* // ))} */}