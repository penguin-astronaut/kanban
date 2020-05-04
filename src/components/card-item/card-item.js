import React from "react";

import "./card-item.css";

function CardItem({title}) {
  return (
    <li className="card-list__item">
      <p>{title}</p>
    </li>
  )
}

export default CardItem;