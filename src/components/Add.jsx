import React, { useState } from "react";
import "./Add.css";

function Add() {
  const [content, setContent] = useState();
  const add = () => {};

  return (
    <div className="add">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={Add}>Add</button>
    </div>
  );
}

export default Add;
