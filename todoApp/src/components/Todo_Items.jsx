import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo_Item from './Todo_Item';

// actions
import { deleteTodoActionCreator, toggleTodoActionCreator } from './../actions/actions.js';

// utils
import visibleTodos from './../utilityFunctions/visibleTodos.js';

const
   Todo_Items = ({ todos, remove, toggle }) =>
      <div className="collection">
         {todos.map((todo, index) =>
            <Todo_Item
               key={index}
               index={index}
               todo={todo}
               remove={remove}
               toggle={toggle} />
         )}
      </div>,
   // dispatch!
   mapStateToProps = state => ({
      todos: visibleTodos(state.todos, state.visibilityFilter)
   }),
   mapDispatchToProps = dispatch => ({
      remove: index => {
         dispatch(deleteTodoActionCreator(index))
      },
      toggle: index => {
         dispatch(toggleTodoActionCreator(index))
      }
   });

Todo_Items.propTypes = {
   todos: PropTypes.array.isRequired,
   remove: PropTypes.func.isRequired,
   toggle: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo_Items)
