import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// actions ----
import { addTodoActionCreator } from './../actions/actions.js';

const Add_Todo_Form = ({ addTodo }) => {
   let textInput = null;
   const submitHandler = event => {
      event.preventDefault();
      addTodo(textInput.value)
      textInput.value = ''
   }
   return (
      <form onSubmit={submitHandler}>
         <div className="input-field form-container">
            <input
               id="add-todo"
               type="text"
               placeholder="Add Todo"
               ref={input => {
                  textInput = input;
               }}
               required />
         </div>
      </form>
   )
}
Add_Todo_Form.propTypes = {
   addTodo: PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => ({
   addTodo: todo => {
      dispatch(addTodoActionCreator(todo))
   }
})
export default connect(null, mapDispatchToProps)(Add_Todo_Form)
