import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <ul>
                <li>{props.toDo}</li>
            </ul>
        </div>
    );
};

export default Todo;