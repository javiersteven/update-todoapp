import { TodosItem } from "../TodosItem/index.js";

const Todos = ({ todos, setTodos }) => {
  return (
    <>
      <h1>Todos</h1>
      <TodosItem todos={todos} setTodos={setTodos} />
    </>
  );
};

export { Todos };
