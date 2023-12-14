import "./Tasks.scss";

export default function Tasks() {
  return (
    <div className="listTodo">
      <div className="listTodo__row">
        <div className="listTodo__item">Task 1</div>
        <button className="listTodo__delete">Delete</button>
      </div>
      <div className="listTodo__row">
        <div className="listTodo__item">Task 2</div>
        <button className="listTodo__delete">Delete</button>
      </div>
      <div className="listTodo__row">
        <div className="listTodo__item">Task 3</div>
        <button className="listTodo__delete">Delete</button>
      </div>
    </div>
  );
}
