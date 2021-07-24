import React, {useState} from 'react';
import {Todos} from './Todos';

export function App (){

  const [todos, setTodos] = useState([
    {id:0, todoText:"Wake up", done: false},
    {id:1, todoText:"Running", done: false},
    {id:2, todoText:"Breakfast", done: false},
  ])
  const [newTodo, setNewTodo]= useState('')

  function addTodo(){
    let todoObject = { 
      id: todos.length+1,
      todoText: newTodo,
      done: false
    }
    setTodos([...todos, todoObject]);
    setNewTodo('')
  }

  function markTodoAsDone(todo){
    console.log(todo)
    setTodos(
      [...todos.map(i=>(i.id === todo.id)?
        {id: i.id, todoText: i.todoText, done: !i.done}:
        i)]
    )
  }

  function deleteBtn (item){
    setTodos(
      [...todos.filter(i=> i.id !== item.id)]
    )
  }

  return(
    <div id='app'>
      <h2>domasna6</h2>

      <input
        type='text'
        placeholder='add new todo'
        value={newTodo}
        onChange={(e=>{setNewTodo(e.target.value)})}/>

        <button onClick={addTodo}>
          Add todo
        </button>

      <Todos
      todoList={todos}
      markTodoAsDone={markTodoAsDone}
      deleteBtn={deleteBtn}
      />
    </div>
  )
}