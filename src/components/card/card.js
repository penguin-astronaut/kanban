import React from "react";
import { Link } from "react-router-dom";

import './card.css'
import {ReactComponent as AddIcon} from './add.svg';

const Card = (props) => {
  const {actionComponent, isShowAction, showAction, children: content, title, link} = props;
  const button = (
    <button className="card__action" disabled={isShowAction} onClick={showAction}>
      <AddIcon />
      Add task
    </button>
  );

  const action = isShowAction ? actionComponent : null;

  return (
    <div className="card">
      <div className="card__title"><Link to={'/' + link} className="card__link">{title}</Link></div>
      <ul className="card-list">
        { content }
      </ul>
      {action}
      {button}
    </div>
  )
}

export default Card;