export default function TodoItem ({id,todotext,completed,setCheckStatus,handleDelete}) {
    return (
    <li>
        <label htmlFor="checkb">
      <input id="checkb" type="checkbox" checked={completed} onChange={e => setCheckStatus(id,e.target.checked)} />
      {todotext}</label>
    <button className="btn btn-delete" onClick={e => handleDelete(id)}>Delete</button>
  </li>
    )
}

//    Code for setting the check box state - breaks functionality now
//         {todos.todotext}
