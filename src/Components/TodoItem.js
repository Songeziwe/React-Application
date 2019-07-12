import React from 'react';

const TodoItem = (props) => {
    return (
        <div className="todoItem">
            <p>{ props.todoText }</p>
        </div>
    );
}

export default TodoItem;