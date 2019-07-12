import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    const {todos, handleDelete} = props;
    
    // create a todo component from the available todos
    const todoComponents = todos.map(todo => {
        return <TodoItem 
                    key={ todo.todoText } 
                    todoText={ todo.todoText }
                    handleDelete={ handleDelete } 
                    />
        });

    return (
        <div className="todoList">
            { todoComponents.length ? todoComponents : <p className="noTodos">You have no Todos yet!</p> }
        </div>
    ); 
}

export default TodoList;