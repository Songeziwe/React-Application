import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Button from './Button';

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
                        key={ todo.todoText } 
                        todoText={ todo.todoText }
                        handleDelete={ this.handleDelete } 
                    />
        });
        return todoComponents;
    }

    handleDelete = (todoId) => {
        const updatedTodos = this.state.todos.filter(oldTodo =>{
            return oldTodo.todoText !== todoId;
        });

        this.setState({ todos: updatedTodos }); // setState will again make render be called by the React library
    }

    handleChange = (event) => {
        console.log("working");
        //const newTodo = event.target.value;
       // const todoObject = { todoText: newTodo };
        //this.setState({ todos: [...this.state.todos, todoObject]  });
    }
    
    handlSubmit = (event) => {
        event.preventDefault();
       // const newTodo = event.target.value;
        //const todoObject = { todoText: newTodo };
       // this.setState({ todos: [...this.state.todos, todoObject]  });
    }

    render() {
        return (
            <div className="todoList">
             { this.state.todos.length ? this.makeTodoComponents() : <p className="noTodos">You have no Todos yet!</p> }
             <Button handleChange={this.handleChange}/>
            </div>
        );
    }
}

export default TodoList;