import { useState } from "react";
//import React from 'react'

function List() {
    const [tasks, setTasks] = useState([
        { id: 1, task: "React" },
        { id: 2, task: "JavaScript" },
        { id: 3, task: " Angular" }
      ]);
  return (
    <div>
      <h1>My Tasks</h1>
      <ul>
        {tasks.map((task) => (
          
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </div>
  )
}

export default List