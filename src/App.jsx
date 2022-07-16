import React from "react";
import "./App.css";
import Add from "./components/Add";
import Item from "./components/Item";
import { useSelector } from "react-redux";

function App() {
  const { todoList } = useSelector((state) => state.todo);
  console.log(todoList);
  return (
    <div className="App">
      <Add />
      <div className="container">
        {todoList &&
          todoList.map((item) => {
            return <Item todo={item} key={item.id} />;
          })}
      </div>
    </div>
  );
}

export default App;
