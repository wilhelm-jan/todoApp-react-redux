import React from "react";
import "./Item.css";

function Item({ todo }) {
  return (
    <div className="item">
      <p className={todo.done ? "item-done" : ""}>{todo.item}</p>
    </div>
  );
}

export default Item;
