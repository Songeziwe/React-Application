import React from 'react';

const TodoItem = (props) => {
    const {todoText, handleDelete} = props;
    return (
        <div 
            className="todoItem" 
            onClick={() => { handleDelete(todoText); } }
        >
            <p>{ todoText }</p>
        </div>
    );
}

export default TodoItem;