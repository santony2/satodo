import { useState } from "react";

export default function AddTodoItems({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    !!inputValue ? console.log("value") : console.log("empty");
    if (inputValue.trim().length !== 0) {
      onSubmit(inputValue);
    }
    setInputValue("");
  }

  return (
    <form className="new-todo" onSubmit={handleSubmit}>
      <label htmlfor="form_item">New To Do: </label>
      <input
        type="text"
        id="form_item"
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
