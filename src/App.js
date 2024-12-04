import './App.css';
import React, { Component } from 'react'
import { useState } from 'react'



export default function App() {
  const [inputValue, setInputValue] = useState("")
  const [todoitems, setTodoitems] = useState([])


  function handleSubmit(e) {
    e.preventDefault();
    // !!(inputValue)?console.log("value"):console.log("empty")
    if (inputValue.trim().length !== 0) {
      setTodoitems(tmpTodoitems => {
        return [...todoitems,{id: crypto.randomUUID(),todotext:inputValue, completed:false},]
      })
    }
    setInputValue('');
    return [todoitems]
  }

  function setCheckStatus(id, completed) {
    setTodoitems(tmpTodoitems => {
      return tmpTodoitems.map(todos => {
        if (todos.id === id) {
          return {...todos, completed}
        }
        return todos
      })
    })
  }

  function handleDelete(todos) {
    setTodoitems(tmpTodoitems => todoitems.filter((todo)=> todo.id !== todos.id ))
  }


  return (
    <>
      <h1 className="header">To Do list</h1>
      <ul className="list">
        {todoitems.length === 0 && "Enter your first to do items"}
        {todoitems.map(todos => {
        return ( 
        <li key={todos.id}>
        <label>
          <input type="checkbox" onChange={e => setCheckStatus(todos.id,e.target.checked)}/>{todos.todotext}&nbsp;
{//    Code for setting the check box state - breaks functionality now
//         <input type="checkbox" checked={todos.completed} />{todos.todotext}
        }
          </label>
        <button className="btn btn-delete" onClick={e => handleDelete(todos)}>Delete</button>
      </li>)
        })}
      </ul>
      <form className="new-todo" onSubmit={handleSubmit}>
      <label htmlfor="form_item">New To Do: </label>
      <input type='text' id="form_item" value={inputValue} onChange={e => setInputValue(e.target.value)}/>&nbsp; 
      <button className="btn btn-add" onClick={handleSubmit}>Add</button>
      </form>
    </>
  )
}