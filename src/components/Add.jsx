import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Add.css";
import { addTodo } from "../features/todoSlice";

function Add() {
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const inputElement = useRef();
  const dispatch = useDispatch();

  const add = () => {
    setSaving(true);
    dispatch(
      addTodo({
        id: Math.floor(Math.random() * 100),
        item: content,
        done: false,
      })
    );

    setTimeout(() => {
      setSaving(false);
    }, 2000);
    setContent("");
  };

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
    <div className="add">
      <input
        placeholder={saving ? "SAVING..." : ""}
        ref={inputElement}
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={add} disabled={!content && "true"}>
        ADD
      </button>
    </div>
  );
}

export default Add;
