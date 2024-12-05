import { useState } from "react";

export default function AddTodoItems({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim().length !== 0) {
      onSubmit(inputValue);
    }
    setInputValue("");
  }

  return (
    <form className="new-todo" onSubmit={handleSubmit}>
      <label htmlFor="form_item">New To Do:&nbsp;</label>
      <input
        type="text"
        id="form_item"
        placeholder="Enter your task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      &nbsp;
      <button className="btn btn-add" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
