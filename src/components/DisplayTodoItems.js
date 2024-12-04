import TodoItem from './TodoItem'
//import ErrorBoundary from './ErrorBoundary';


export default function DisplayTodoItems ({todoitems, setCheckStatus, handleDelete}) {
    return (
    <ul className="list">
    {todoitems.length === 0 && "Enter your first to do items"}
    {todoitems.map(todos => {
    return (      
        <TodoItem {...todos} key={todos.id} setCheckStatus={setCheckStatus} handleDelete={handleDelete}/>
    //  <li key={todos.id}>
    //  <input type="checkbox" onChange={console.log ("set checked")}/>
    //  <label>{todos.todotext}&nbsp;
    //  </label>
    //  <button className="btn btn-delete" onClick={handleDelete}>Delete</button>
    //  </li>
    )
    })}
  </ul>
)}



// add to delete
// onClick={e => handleDelete(todos)}

// add to checkbox state
// onChange={e => setCheckStatus(todos.id,e.target.checked)}