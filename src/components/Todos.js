import React from 'react';
import PropTypes from 'prop-types';


export function Todos (props) {

    console.log(props)
    return(
        <div id='todos'>
            <ol>
                {props.todoList.map((todo, i)=>{
                    return(
                        <li key={todo.id}>
                            <span>{todo.todoText}</span>
                            <input
                            type='checkbox'
                            value={todo.done}
                            onChange={()=>{props.markTodoAsDone(todo)}}
                            ></input>
                            <button 
                            type='button' 
                            onClick={()=>{props.deleteBtn(todo)}}>
                                Delete item
                            </button>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

Todos.propTypes = {
    todoList: PropTypes.array.isRequired,
    deleteBtn: PropTypes.func
}