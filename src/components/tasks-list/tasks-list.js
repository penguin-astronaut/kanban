import React from "react";

import './tasks-list.css'

import LocalStorageService from "../../services/localStorageService";
import {Link} from "react-router-dom";

const TasksList = (props) => {
  const { type } = props;
  const { filterByType } = new LocalStorageService();
  const items = filterByType(type);
  const tasks = items.map(item => {
    return <div className="task" key={item.id}>
      <div className="task__title">{item.title}</div>
      <div className="task__date">Created: {item.date}</div>
      <div className="task__desc">{item.desc}</div>
    </div>
  })
  return (
    <div className="tasks-container">
      <h2 className="tasks__title">Tasks</h2>
      <Link to="/" className="tasks__close"/>
      <div className="tasks">
        {tasks}
      </div>
    </div>
  );
}

export default TasksList;