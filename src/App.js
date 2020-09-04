import React, { useState } from 'react';
import './App.css';

import TodoItem from './components/TodoItem';


function App() {

  const [todoItems, setTodoItems] = useState([
    {title: 'Mua bim bim' , isComplete: true},
    {title: 'Chó sửa gẩu'},
    {title: 'Đi đu đi đưa'}
  ]);

  return (
    <div className="App">  

      {
        todoItems.map((item,index) => 
          <TodoItem key={index} item={item}/>
        )
      }

    </div>
  );
}

export default App;
