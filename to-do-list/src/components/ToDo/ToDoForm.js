import React, {useState} from 'react'

const ToDoForm = ({addTask}) => {
    const [newTask, setNewTask] = useState('');

    const handleNewTask = (e) => {
        setNewTask(e.target.value);
    }
    const addNewTask = (e) => {
        e.preventDefault();
        if (newTask.trim() !== '') {
            addTask(newTask);
            setNewTask('');
        } else {
            alert('Errand Required');
        }
    }
   
    return (
        <div className="ToDo">
            <h1>Errands We Need To Add To Our To Do List</h1>
            <form onSubmit={addNewTask}>
                <input
                className="todo-input"
                value={newTask}
                onChange={handleNewTask}
                type='textarea'
                placeholder="What needs to get done?"
                />
    
                <button type='submit'>
                Add Errand
                </button> 
            </form>

        </div>
    
)    
}
export default ToDoForm