import React, { Component } from 'react';
import TodoItem from './TodoItem';

// This component must have a state
class TodoList extends Component {
    // omitted the constructor
    state = {}
    
    render() {
        return (
            <div className="todoList">
                <TodoItem />
            </div>
        );
    }
}

export default TodoList;