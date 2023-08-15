//input form to add to the list on Page 2
import React, {useState} from "react";
import ToDo from "./ToDo.js"
import ToDoForm from "./ToDoForm.js"


function ToDoList() {
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

   return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title} - {item.completed ? "Completed" : "Not Completed"}{' '}
            <button onClick={(item.id)}>Delete</button>{' '}
            <button onClick={(item.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
   );        
};

export default ToDoList