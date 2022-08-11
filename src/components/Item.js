import React, { useState} from "react";

function Item({ name, category }) {
  const [state, setState]=useState(false)
  function handleClick(){
    setState(!state)
  }
  return (
    <li className={!state ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{!state ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
