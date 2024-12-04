import './App.css';
import React from 'react'
import { useState } from 'react'
import AddTodoItems from './components/AddTodoItems'
import DisplayTodoItems from './components/DisplayTodoItems'
import AppHeader from './components/AppHeader'
import ErrorBoundary from './components/ErrorBoundary';


export default function App() {
  const [todoitems, setTodoitems] = useState([])

  function addTodo(todotext) {
    setTodoitems(tmpTodoitems => {
    return [...todoitems,{id: crypto.randomUUID(),todotext, completed:false},]
    })
    console.log ("text =",todotext)
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

 function handleDelete(id) {
    console.log ("delete the item")
    setTodoitems(tmpTodoitems => todoitems.filter((todo)=> todo.id !== id ))
  }


  return (
    <>
      <ErrorBoundary>
      <AppHeader />
      </ErrorBoundary>

      <ErrorBoundary fallback={<p>Something went wrong. Please refresh the page and try again. </p>}>
      <DisplayTodoItems todoitems={todoitems} setCheckStatus={setCheckStatus} handleDelete={handleDelete}/>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>Something went wrong at add. Please refresh the page and try again. </p>}>
      <AddTodoItems onSubmit={addTodo} />
      </ErrorBoundary>

    </>
  )
}



