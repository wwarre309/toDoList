import React, {useState} from 'react'
import './ToDo.css'


function ToDo(props) {
   
  const [itemsArray, setItemsArray] = useState([
 
//     id: 1,
//     title: "Grab some Pizza",
//     completed: true
// },
// {
//      id: 2,
//      title: "Do your workout",
//     completed: true
// },
// {
//      id: 3,
//     title: "Hangout with friends",
//     completed: false
// }
])
  const [newTask, setNewTask] = useState('')
    // const addItem = (e) => {
    //   setNewTask(e.target.value)
    //   newTask.push(ToDoList)
    //   console.log(newTask)


  //   function addItem(newTask) {
  // setItemsArray(...itemsArray,{id: (itemsArray.length + 1),  
  //   title: newTask, 
  //   completed: false})
  //   console.log(newTask)
  //   console.log(itemsArray[0])
  //   console.log(itemsArray[1])
  //     console.log(itemsArray[2])
  //     console.log(itemsArray[3])
  //     };

      function addItem(newTask) {
        setItemsArray(...itemsArray,[itemsArray.length + 1,  
           newTask, 
          false])
          console.log(itemsArray)

            };

      
      // [...props.items, {
      //   id: props.items.length + 1,  
      //   title: props.title, 
      //   completed: false
      // }];
      // props.setItems(props.items);
     
      
    
    

  return (
    <div>
      <input className="ToDo-input"
      value={newTask}
      onChange={e => setNewTask(e.target.value)}
      placeholder='What needs to get done?'
      />
            <button 
      onClick={(e) => {
          e.preventDefault();
          addItem(newTask)
      }}
  >
      submit
  </button> 


      {/* <ToDoList />
      <ToDoForm 
      addItem={addItem}
      itemsArray={itemsArray}
      newTask={newTask}
      /> */}
    </div>
    )
}

export default ToDo