export default function TodoItem({
  id,
  todotext,
  completed,
  setCheckStatus,
  handleDelete,
}) {
  return (
    <li className="todo-items">
      <label className="container">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCheckStatus(id, e.target.checked)}
        />
        <span className="checkmark"></span>
        {todotext}&nbsp;
      </label>
      <button className="btn btn-delete" onClick={(e) => handleDelete(id)}>
        X
      </button>
    </li>
  );
}
