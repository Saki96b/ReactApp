import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim()) {
      setTasks([...tasks, task]);
    }
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="App">
      <h1>📝 To-Do Apps</h1>
      <TodoList tasks={tasks} addTask={addTask} removeTask={removeTask} />
    </div>
  );
}

export default App;
