import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, addTask, removeTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    addTask(newTask);
    setNewTask('');
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          placeholder="Add a new task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onRemove={() => removeTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
