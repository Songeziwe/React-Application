import React from 'react';

// contain a button and an input element
const Button = (props) => {
    return (
        <div className="inputTodo">
            <form onSubmit={props.handleSubmit}>
                <input 
                    type="text"
                    name="inputTodo"
                    value={props.inputTodo}
                    onChange={props.handleChange}
                />
                <button className="button">ADD</button>
            </form>
        </div>
    );
}

export default Button;