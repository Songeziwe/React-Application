import React from 'react';
import TodoList from './TodoList';
import Header from './Header';
import Button from './Button';

// Stateless Functional Component
// Renders only the TodoList, header, and Button for adding a new todoItem
// TodoList Renders the TodoItems
// TodoItems just render HTML elements
// Button element render a Button and an inut field for new todo
const App = () => {
    return (
        <React.Fragment>
            <Header />
            <TodoList />
            <Button />                             
        </React.Fragment> 
    );
}

export default App;