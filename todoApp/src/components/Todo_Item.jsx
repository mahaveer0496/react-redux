import React from 'react';
import PropTypes from 'prop-types';

const Todo_Item = ({ todo, index, remove, toggle }) =>
   <div className="collection-item">
      <p className="list">

         <input
            id={todo.todo}
            type="checkbox"
            onClick={() => toggle(index)}
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
         onClick={() => remove(index)}
         className="delete secondary-content"
         key={index}>
         <i className="material-icons">delete</i>
      </div>
   </div>


Todo_Item.propTypes = {
   todo: PropTypes.object.isRequired,
   index: PropTypes.number.isRequired
};

export default Todo_Item;
