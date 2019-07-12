import React, { Component } from 'react';
import TodoList from './TodoList';
import Header from './Header';
import Button from './Button';


// Stateless Functional Component
// Renders only the TodoList, header, and Button for adding a new todoItem
// TodoList Renders the TodoItems
// TodoItems just render HTML elements
// Button element render a Button and an inut field for new todo
class App extends Component {
    // omitted the constructor
    state = {
        todos: [],
        inputTodo:""
    }

    handleDelete = (todoId) => {
        const updatedTodos = this.state.todos.filter(oldTodo =>{
            return oldTodo.todoText !== todoId;
        });

        this.setState({ todos: updatedTodos }); // setState will again make render be called by the React library
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }
    
    handleSubmit = (event) => {
        const todoObject = { todoText: this.state.inputTodo };
        this.setState({ todos: [...this.state.todos, todoObject], inputTodo: ""  });
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <TodoList 
                    todos={this.state.todos} 
                    handleChange={this.handleChange}
                    handleDelete={this.handleDelete}
                />
                <Button 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    inputTodo={this.state.inputTodo}
                />                            
            </React.Fragment> 
        );
    }
}

export default App;