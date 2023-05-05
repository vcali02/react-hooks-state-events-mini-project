import React, {useState} from "react";

function NewTaskForm({categories, addNewTask}) {
  const formOutline = {
    category: "Code",
    text: ""
  }

  const [form, setForm] = useState({category: "Code", text: ""})

  //create a callback
  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }


function handleSubmit(e){
  e.preventDefault()
  addNewTask(form)
  setForm(formOutline)
}




  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={(e) => handleChange(e)} value={form.text} type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" onChange={e => handleChange(e)}>
          {
          categories.map((el, i) => {
            //is el "All" ?
            if(el !== "All"){
              return <option key={i}>{el}</option>
            } 
          })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
