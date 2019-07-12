import React from 'react';

// contain a button and an input element
const Button = () => {
    return (
        <div className="inputTodo">
            <form>
                <input type="text"/>
                <button className="button">ADD</button>
            </form>
        </div>
    );
}

export default Button;