import React, { Component } from 'react';
import TodoItem from './TodoItem';

// This component must have a state
class TodoList extends Component {
    // omitted the constructor
    state = {
        todos:[
            { todoText: "make bed"},
            { todoText: "make tea" },
            { todoText: "study maths" },
            { todoText: "start capstone project" },
            { todoText: "pay bills" },
            { todoText:  "call friend" }
        ]
    }
    // create a todo component from the available todos
    makeTodoComponents = () => {
        const todoComponents = this.state.todos.map(todo => {
            return <TodoItem 
                        key={todo.todoText} 
                        todoText={todo.todoText}
                        handleDelete={this.handleDelete} 
                    />
        });
        return todoComponents;
    }

    handleDelete = (todoId) => {
        const updatedTodos = this.state.todos.filter(oldTodo =>{
            return oldTodo.todoText !== todoId;
        });

        this.setState({ todos: updatedTodos });
    }

    render() {
        return (
            <div className="todoList">
             { this.makeTodoComponents() }
            </div>
        );
    }
}

export default TodoList;