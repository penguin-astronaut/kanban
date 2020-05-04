import React from "react";

import './card-input.css';

function CardInput(props) {
  return (
    <input
      {...props}
      placeholder="Enter task name"
      type="text"
      className="card__input"
      autoFocus
    />
  )
}

export default CardInput;