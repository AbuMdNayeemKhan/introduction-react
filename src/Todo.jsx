import React from 'react';

const Todo = ({toDo, isDone}) => {
    return (
        <div>
            {isDone ? 'Finished' : 'Work on'} : {toDo}
        </div>
        ); 
};

export default Todo;