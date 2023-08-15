import React, {useState} from 'react'

function ToDoForm() {
    const [errand, setErrand] = useState('');
    const handleAddition = (event) => {
        event.preventDefault();
        if (errand === '') {
            alert("All Fields Must Be Entered")
        }
    }

  return (
    <div className="ToDo">
        <h1>Errands We Need To Add To Our To Do List</h1>
        <form>
            <label>
                Input Errand Here: <input type='textarea'/>
            </label>
            <button>Add to List <input type='submit' />
            </button> 
            <input type='submit' />

        </form>





    </div>
  )
}

export default ToDoForm