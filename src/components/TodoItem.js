import React from 'react'
import checkImg from '../img/check.svg'
import checkCompleteImg from '../img/check-complete.svg'

function TodoItem(props) {
    
    const {item} = props;       // {item} = props.item
    let className = 'TodoItem';
    if(item.isComplete){
        className += ' TodoItem-complete'
    }

    const {onClick} = props;

    let url = checkImg;
    if(item.isComplete){
        url = checkCompleteImg;
    }

    return (
        <div onClick={onClick} className={className}>

            <img src={url} width={32} ></img>
            <p>{props.item.title}</p>
            
        </div>
    )
}


export default TodoItem;

