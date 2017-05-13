import React from 'react';
const Add_Todo_Form = ({ addTodo }) =>
   <form onSubmit={addTodo}>
      <div className="input-field form-container">
         <input id="add-todo" type="text" placeholder="Add Todo" required />
      </div>
   </form>
export default Add_Todo_Form;
