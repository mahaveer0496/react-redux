import React from 'react';
import Todo_Item from './Todo_Item';
const Todo_Items = ({ todos, toggleTodo, deleteTodo }) =>
   <div className="collection">
      {todos.map((todo, index) =>
         <Todo_Item/>
      )}
   </div>

export default Todo_Items;