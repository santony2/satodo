import TodoItem from "./TodoItem";

export default function DisplayTodoItems({
  todoitems,
  setCheckStatus,
  handleDelete,
}) {
  return (
    <ul className="todo-list">
      {todoitems.length === 0 && "Enter your first to do items"}
      {todoitems.map((todos) => {
        return (
          <TodoItem
            {...todos}
            key={todos.id}
            setCheckStatus={setCheckStatus}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}
