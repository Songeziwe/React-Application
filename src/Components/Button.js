import React from 'react';

// contain a button and an input element
const Button = () => {
    return (
        <div className="inputTodo">
            <form>
                <input type="text"/>
                <button>addTodo</button>
            </form>
        </div>
    );
}

export default Button;