# [+] TodoApp: CRUD - Update

El 'mini' CRUD hace uso de:

- `ReactDOM.CreatePortal()`: para desarrollar el modal.

- `React.CreateContext()`: para pasar mejor las props de un componente a otro.

La solución fue la siguiente:

1. Todo inicia en el componente `TodosItem`, allí se se le pasa al componente `UpdateTodoPanel` el id del todo a actualizar.

   - Esto se logra ya que al iterar por medio del `map` se puede acceder a las props de cada todo y de esta manera se actualiza el estado `completeTodo()` con el id del todo actual.

2. Luego se le pasa el estado de `todoToSearch` (el id del todo que recibe el onClick).

3. En el componente `UpdateTodoModal` se muestran los datos del todo a actualizar. Luego con el evente onChange del input se actualiza el estado. El codigo para manejar el evento Submit del formulario fue el siguiente:

    ~~~
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodos = todos.filter(todo => todo.id !== todos[todoToSearch].id)
        const newSTodos = [
            ...newTodos, { 
                complete: todos[todoToSearch].complete, 
                id: todos[todoToSearch].id, 
                todo: todo 
            }
        ];
        setTodos(newSTodos.sort((a, b) => a.id - b.id));
        setState(!state);
      };
    ~~~