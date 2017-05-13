const Todo_Item = params =>
   <div className="collection-item" key={index}>
      <p className="list">

         <input
            id={todo.todo}
            type="checkbox"
            onClick={() => toggleTodo(index)}
            onChange={() => {
               if ('lol' > 0) { }
            }}
            checked={todo.completed} />

         <label
            className={todo.completed ? 'strike list' : 'list'}
            htmlFor={todo.todo}>
            {todo.todo}
         </label>
      </p>

      <div
         onClick={() => deleteTodo(index)}
         className="delete secondary-content"
         key={index}>
         <i className="material-icons">delete</i>
      </div>
   </div>
export default Todo_Item
