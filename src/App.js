import React, { useState } from "react";
import "./App.css";
import tick from "./img/tick.svg";

import TodoItem from "./components/TodoItem";

function App() {
  const [todoItems, setTodoItems] = useState([
    { title: "Mua bim bim", isComplete: true },
    { title: "Chó sửa gẩu" },
    { title: "Đi đu đi đưa" },
  ]);

  const [newItem, setNewItem] = useState('');

  function onItemClicked(item) {
    //setTodoItems([{title:'dop'}]);
    return (event) => {
      console.log(item);

      const isComplete = item.isComplete;
      const index = todoItems.indexOf(item);

      setTodoItems([
        ...todoItems.slice(0, index),
        {
          ...item,
          isComplete: !isComplete,
        },
        ...todoItems.slice(index + 1),
      ]);

      console.log(index);
    };
  }

  function onKeyUp(event) {
    console.log(event.target.value);

    if (event.keyCode === 13) {       // enter
      let text = event.target.value;

      if (!text) {
        // nếu ko có text
        return;
      }

      text = text.trim(); // xóa khoảng cách đầu và cuối
      if (!text) {
        return;
      }

      setTodoItems([
        { title: text, isComplete: false }, 
        ...todoItems
      ]);

      setNewItem('');
    }
  }

  function onChange(event){
    setNewItem(event.target.value);
  }

  return (
    <div className="App">
      <div className="Header">
        <img src={tick} width={32} />
        <input type="text" 
              placeholder="Add new item" 
              onKeyUp={onKeyUp} 
              value={newItem}
              onChange={onChange}
              />
      </div>

      {todoItems.map((item, index) => (
        <TodoItem key={index} item={item} onClick={onItemClicked(item)} />
      ))}
    </div>
  );
}

export default App;
