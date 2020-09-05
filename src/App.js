import React, { useState } from 'react';
import './App.css';

import TodoItem from './components/TodoItem';


function App() {

  const [todoItems, setTodoItems] = useState([
    {title: 'Mua bim bim' , isComplete: true},
    {title: 'Chó sửa gẩu'},
    {title: 'Đi đu đi đưa'}
  ]);

  function onItemClicked(item){
    //setTodoItems([{title:'dop'}]);
    return (event)=>{
      console.log(item);

      const isComplete = item.isComplete;
      const index = todoItems.indexOf(item);

      setTodoItems(
        [
          ...todoItems.slice(0,index),
          {
            ...item,
            isComplete : !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      );
      
      console.log(index);
    }
  }

  return (
    <div className="App">  

      {
        todoItems.map((item,index) => 
          <TodoItem key={index} item={item} onClick={onItemClicked(item)}/>
        )
      }

    </div>
  );
}

export default App;
