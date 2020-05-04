import React from "react";

import "./card-select.css";

const CardSelect = (props) => {
  const {onChange = null, value} = props;
  return (
    <select className="card__select" onChange={onChange} value={value}>
      <option value="0">--------</option>
      {props.children}
    </select>
  )
}

export default CardSelect;