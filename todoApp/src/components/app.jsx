import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions ----
import { addTodoActionCreator, deleteTodoActionCreator, toggleTodoActionCreator, setVisibilityFilterActionCreator } from './../actions/actions.js';

// componenets
import Add_Todo_Form from './Add_Todo_Form';
import Todo_Items from './Todo_Items';


const App = ({ create, remove, toggle, setFilter }) => {
  const addTodo = event => {
    event.preventDefault();
    create('Hello');
  },
    deleteTodo = index => {
      remove(index);
    },
    toggleTodo = index => {
      toggle(index);
    };
  return (
    <div className="container">
      <Add_Todo_Form addTodo={addTodo}/>

      <div className="space"></div>
    </div>
  )
},

  mapStateToProps = state => ({
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  }),
  mapDispatchToProps = dispatch => ({
    create: todo => {
      dispatch(addTodoActionCreator(todo))
    },
    remove: index => {
      dispatch(deleteTodoActionCreator(index))
    },
    toggle: index => {
      dispatch(toggleTodoActionCreator(index))
    },
    setFilter: filter => {
      dispatch(setVisibilityFilterActionCreator(filter))
    }
  });
export default connect(mapStateToProps, mapDispatchToProps)(App)

