import { useState } from "react";
import { UpdateTodoModal } from "../UpdateTodoModal/index.js";

import './TodosItem.css'

const TodosItem = ({ todos, setTodos }) => {
  const [open, setOpen] = useState(false);
  const [todoToSearch, setTodoToSearch] = useState();

  const completeTodo = (id) => {
    const todo = todos.findIndex((todo) => todo.id === id);
    setTodoToSearch(todo);
  };

  return (
    <>
      <ul>
        {todos.map(({ id, todo }) => (
          <li className="li-styles" key={id}>
            <p style={{ width: "60%" }}>{todo}</p>
            <span
              style={{ fontSize: "20px", cursor: "pointer" }}
              role="img"
              aria-label=""
              onClick={() => {
                setOpen(!open);
                completeTodo(id);
              }}
            >
              ✍
            </span>
          </li>
        ))}
      </ul>
      {open && (
        <UpdateTodoModal
          todoToSearch={todoToSearch}
          todos={todos}
          setTodos={setTodos}
          state={open}
          setState={setOpen}
        />
      )}
    </>
  );
};

export { TodosItem };
