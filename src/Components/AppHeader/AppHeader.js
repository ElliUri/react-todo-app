import React from 'react';
import './AppHeader.module.css';

const AppHeader = ({toDo, done,todoCount,  doneCount}) => {
  return (
    <div className="app-header">
      <h1>Todo List</h1>
      {/* <h2>{todoCount} more to do, {doneCount} done</h2> */}
    </div>
  );
};  

export default AppHeader;
