import "./AddTodo.scss";

export default function Add() {
  return (
    <div className="addTodo">
      <input
        className="addTodo__input"
        type="text"
        placeholder="Add Your Todo"
      />
      <button className="addTodo__button">+</button>
    </div>
  );
}
