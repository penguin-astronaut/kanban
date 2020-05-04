import React from "react";

import './card.css'
import {ReactComponent as AddIcon} from './add.svg';

const Card = (props) => {
  const {actionComponent, isShowAction, showAction, children: content, title} = props;
  const button = (
    <button className="card__action" disabled={isShowAction} onClick={showAction}>
      <AddIcon />
      Add task
    </button>
  );

  const action = isShowAction ? actionComponent : null;

  return (
    <div className="card">
      <div className="card__title">{title}</div>
      <ul className="card-list">
        { content }
      </ul>
      {action}
      {button}
    </div>
  )
}

export default Card;