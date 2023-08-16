import React, {useState} from 'react'

function ToDoForm(props) {
    const [errand, setErrand] = useState('');
    // const handleAddition = (event) => {
    //     setErrand(props.target.value);
    //     event.preventDefault();
    //     if (errand === '') {
    //         alert("All Fields Must Be Entered")
    //     } 
    // }

  return (
    <div className="ToDo">
        <h1>Errands We Need To Add To Our To Do List</h1>
        <form >
            <label>
                Input Errand Here: <input type='textarea' value={props.newTask} onChange={(e) => props.handleChange(e)}/>
            </label>
            <button 
                onClick={(event) => {
                    event.preventDefault();
                    props.addItem(event)
                }}
            >
                submit
            </button> 
            {/* <input type='submit' /> */}

        </form>





    </div>
  )
}

export default ToDoForm