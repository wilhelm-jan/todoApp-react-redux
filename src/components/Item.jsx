import React from "react";
import { useDispatch } from "react-redux";
import { markDone, removeTodo } from "../features/todoSlice";
import "./Item.css";

function Item({ todo }) {
  const dispatch = useDispatch();

  const handle = (type) => {
    type === "done"
      ? dispatch(markDone(todo.id))
      : dispatch(removeTodo(todo.id));
  };

  return (
    <div className="item">
      {todo.done ? (
        <i
          className="fa-solid fa-square-check"
          onClick={() => handle("done")}
        ></i>
      ) : (
        <i className="fa-solid fa-square" onClick={() => handle("done")}></i>
      )}
      <p className={todo.done ? "item-done" : ""} id="i">
        {todo.item}
      </p>
      <button>
        <i className="fa-solid fa-trash" onClick={() => handle("remove")}></i>
      </button>
    </div>
  );
}

export default Item;
