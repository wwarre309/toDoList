//input form to add to the list on Page 2
import React, {useState} from "react";



function ToDoList(props) {
    

   return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {props.items.map(item => (
          <li key={item.id}>
            {item.title} - {item.completed ? "Completed" : "Not Completed"}{' '}
            <input value={item} type="checkbox" />
            <button onClick={(item.id)}>Delete</button>{' '}
            <button onClick={(item.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
   );        
};

export default ToDoList