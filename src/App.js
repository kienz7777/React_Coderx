import React, { useState } from 'react';
import './App.css';

import TodoItem from './components/TodoItem';


function App() {

  const [todoItems, setTodoItems] = useState([
    'Mua bim bim',
    'Chó sửa gẩu',
    'Đi đu đi đưa'
  ]);

  return (
    <div className="App">  

      {
        
        todoItems.map((item,index) => <TodoItem key={index} title={item}/>)
      }

    </div>
  );
}

export default App;
