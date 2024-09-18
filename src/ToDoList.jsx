import React, { useState } from 'react'; 

function ToDoList() {
    const [tasks, setTasks] = useState([
    ]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value); 
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index); // Keeps all tasks except the one with the passed index
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) { // Ensure it's not the first task
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]; //Current task with the one above it
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) { // Ensure it's not the last task
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]; // Swap the current task with the one below it
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((element, index) => ( 
                    <li key={index}>
                        <span className='text'>{element}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>
                            <img src="src/assets/delete.png" alt="" /> 
                        </button>
                        <button className='move-button' onClick={() => moveTaskUp(index)}>Up</button>
                        <button className='move-button' onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
