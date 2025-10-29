import React, { useState } from 'react'
import './Todo.css'

export default function Todo() {
    // const [add,setAdd]=useState('')
    const [task,setTask]=useState('')
    const [tasks,setTasks]=useState([])

 const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, done: false }]) // store object
      setTask('')
    }
  }
     const toggleDone = (index) => {
    const newTasks = [...tasks ]
    newTasks[index].done = !newTasks[index].done
    setTasks(newTasks)
  }

const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }


  const clearAll = () => {
    setTasks([])
  }

  return (
    <>
    <div><h1>TO DO LIST</h1></div>
    <input type='text' id='first' placeholder="Enter a task" value={task} onChange={(e) => setTask(e.target.value)}/>
    <button className='show' onClick={addTask}>ADD</button>



   <ul>

        {tasks.map((t, index) => (
          <li key={index}  style={{
              textDecoration: t.done ? 'line-through' : 'none',
              color: t.done ? 'green' : 'black'
            }}>
             <button className='butt' onClick={() => toggleDone(index)} style={{ marginLeft: '10px' }}>✅</button>

              {t.text}
            <button className='but' onClick={() => deleteTask(index)} style={{ marginLeft: '5px' }}>❌</button>
            </li>
        ))}
      </ul>

 <button onClick={clearAll} style={{ marginLeft: '10px' }}>ALL CLEAR</button>

      
       

    </>
  )
}
