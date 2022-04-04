import React, { useState } from "react";
import './updateTodoModal.css'

const UpdateTodoModal = ({
  state,
  setState,
  setTodos,
  todos,
  todoToSearch
}) => {
  const [todo, setTodo] = useState(todos[todoToSearch].todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = todos.filter(todo => todo.id !== todos[todoToSearch].id)
    const newSTodos = [
      ...newTodos,
      { complete: todos[todoToSearch].complete, id: todos[todoToSearch].id, todo: todo }
    ];
    setTodos(newSTodos.sort((a, b) => a.id - b.id));
    setState(!state);
  };
  return (
    <>
      {state && (
        <div className="wrapper-modal-up">
          <div className="modal-styles-up">
            <h2>Hola mundo!</h2>
            <p>Todo esto es desde un modal!</p>
            <div>
              <form className="form-styles-up" onSubmit={handleSubmit}>
                <label>Todo: </label>
                <input
                  autoFocus
                  type="text"
                  value={todo}
                  placeholder="Aquí deberia aparecer tu Todo"
                  onChange={(e) => setTodo(e.target.value)}
                />
                <div className="buttons">
                    <button type="submit">Cambiar Todo!</button>
                    <button className="close-btn-up" type="button" onClick={() => setState(!state)}>Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { UpdateTodoModal };
