import React from 'react';

function TodoItem({ task, onRemove }) {
  return (
    <li>
      {task} <button onClick={onRemove}>❌</button>
    </li>
  );
}

export default TodoItem;
