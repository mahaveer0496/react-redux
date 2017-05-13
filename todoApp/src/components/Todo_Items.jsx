import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo_Item from './Todo_Item';

import { deleteTodoActionCreator, toggleTodoActionCreator } from './../actions/actions.js';

const Todo_Items = ({ todos, remove, toggle }) =>
   <div className="collection">
      {todos.map((todo, index) =>
         <Todo_Item
            key={index}
            index={index}
            todo={todo}
            remove={remove}
            toggle={toggle} />
      )}
   </div>;

Todo_Items.propTypes = {
   todos: PropTypes.array.isRequired,
   remove: PropTypes.func.isRequired,
   toggle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
   todos: state.todos
}),
   mapDispatchToProps = dispatch => ({
      remove: index => {
         dispatch(deleteTodoActionCreator(index))
      },
      toggle: index => {
         dispatch(toggleTodoActionCreator(index))
      }
   });
export default connect(mapStateToProps, mapDispatchToProps)(Todo_Items)
