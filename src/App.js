//import "./App.css";
import "./components/Styles.css";
import React from "react";
import { useEffect, useState } from "react";
import AddTodoItems from "./components/AddTodoItems";
import DisplayTodoItems from "./components/DisplayTodoItems";
import AppHeader from "./components/AppHeader";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  const [todoitems, setTodoitems] = useState(() => {
    const localValue = localStorage.getItem("TODOS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });
// sample
  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todoitems));
  }, [todoitems]);

  function addTodo(todotext) {
    setTodoitems((tmpTodoitems) => {
      return [
        ...todoitems,
        { id: crypto.randomUUID(), todotext, completed: false },
      ];
    });
  }

  function setCheckStatus(id, completed) {
    setTodoitems((tmpTodoitems) => {
      return tmpTodoitems.map((todos) => {
        if (todos.id === id) {
          return { ...todos, completed };
        }
        return todos;
      });
    });
  }

  function handleDelete(id) {
    setTodoitems((tmpTodoitems) => todoitems.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <ErrorBoundary>
        <AppHeader />
      </ErrorBoundary>

      <ErrorBoundary
        fallback={
          <p>Something went wrong. Please refresh the page and try again. </p>
        }
      >
        <DisplayTodoItems
          todoitems={todoitems}
          setCheckStatus={setCheckStatus}
          handleDelete={handleDelete}
        />
      </ErrorBoundary>
      <ErrorBoundary
        fallback={
          <p>Something went wrong. Please refresh the page and try again. </p>
        }
      >
        <AddTodoItems onSubmit={addTodo} />
      </ErrorBoundary>
    </>
  );
}
