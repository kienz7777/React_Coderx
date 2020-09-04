import React from 'react'

function TodoItem(props) {
    
    const {item} = props;       // {item} = props.item
    let className = 'TodoItem';
    if(item.isComplete){
        className += ' TodoItem-complete'
    }
    return (
        <div className={className}>
            <p>{props.item.title}</p>
        </div>
    )
}


export default TodoItem;

