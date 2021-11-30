import "./styles.css";
import React, { useState } from "react";
import ToDoList from "./ToDoList";

export default function App() {
  let [inputList, setInputList] = useState("");
  let [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const submits = (event) => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  function handleKeydown(event) {
    if (event.keyCode === 13) submits();
  }

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>ToDo List</h1>
        <input
          type="text"
          placeholder="Add an item"
          value={inputList}
          onChange={itemEvent}
          id="input"
          onKeyDown={handleKeydown}
        ></input>

        <button onClick={submits} disabled={!inputList} id="submit">
          +
        </button>

        <ol>
          {items.map((itemVal, index) => {
            return (
              <ToDoList
                text={itemVal}
                key={index}
                id={index}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}
