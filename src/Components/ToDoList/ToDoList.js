import React from 'react';

import TodoListItem from '../ToDoListItem/ToDoListItem';
import './TodoList.module.css';

const TodoList = ({ todos, onDeleted, toggleDone}) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps }
          onDeleted={() => onDeleted(id)}
         toggleDone={toggleDone} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;