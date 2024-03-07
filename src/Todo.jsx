import React from 'react';

const Todo = ({toDo, isDone}) => {
    if(isDone === false){
        return toDo;
    }
};

export default Todo;