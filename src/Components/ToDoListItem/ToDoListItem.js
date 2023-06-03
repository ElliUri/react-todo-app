import React, { useState } from 'react';
import './ToDoListItem.module.css';

const ToDoListItem = ({label, id,  important = false, onDeleted, done  }) => {
  const [isDone, setIsDone] = useState(false);
  const handleClick = () => {
    setIsDone(!isDone)
    const toggleDone = () => {
  this.setState(({ done }) => {
    return {
      done: !done
    };
  });
  toggleDone()
};
  }
const [isImportant, setIsImportant] = useState(false);
const handleClickImportant = () => {
  setIsImportant(!isImportant)
}
const textStyle = {
textDecoration: isDone ? "line-through" : 'none',
color: isDone ? 'grey' : "black",
color: isImportant ? "rgb(9, 140, 247)" : "black"
};

  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item"
        onClick={handleClick}
        style={textStyle}
      >
        {label}
      </span>
      <button type="button" className="btn btn-outline-danger btn-sm" 
      onClick={onDeleted}>
        <i className="fa fa-trash" />
      </button>
      <button type="button" className="btn btn-outline-success btn-sm"  
      onClick={handleClickImportant}>
        <i className="fa fa-exclamation" />
      </button>
    </span>
  );
};

export default ToDoListItem;