import React, {useState} from 'react'
import ToDoList from "./ToDoList.js"
import ToDoForm from "./ToDoForm.js"


function ToDo() {
    const [newTask, setNewTask] = useState("")
    const [items, setItems] = useState ([
        {
       
               id: 1,
               title: "Grab some Pizza",
               completed: true
           },
           {
                id: 2,
                title: "Do your workout",
               completed: true
           },
           {
                id: 3,
               title: "Hangout with friends",
               completed: false
           }
       
           ]);

    const addItem = (e) => {
        console.log(newTask)
        // setItems(e.target.value)
    }

    const handleChange = (e) => {
       setNewTask(e.target.value)
    }

    
  return (
   <div>
     <ToDoForm 
     addItem={addItem}
     newTask={newTask}
     handleChange={handleChange}/>

     <ToDoList 
     items={items}
     />

   </div> 
  )
}

export default ToDo