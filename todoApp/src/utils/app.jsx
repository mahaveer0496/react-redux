import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodoActionCreator, deleteTodoActionCreator } from './reducer'


class App extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  addTodo(event) {
    event.preventDefault();
    this.props.addTodo(this.refs.text.value);
    this.refs.text.value = '';
  }
  deleteTodo(index) {
    console.log(`deleteCalled ${index}`);
    this.props.deleteTodo(index)
  }
  render() {
    let { todos } = this.props;
    console.log(todos);
    return (
      <div className="jumbotron container">
        <form onSubmit={this.addTodo}>
          <input className="form-control" type="text" ref="text" />
          <input className="btn btn-primary btn-block" type="submit" />
        </form>
        <ul className="list-group">
          {todos.map((todo, index) =>
            <li className="list-group-item justify-content-between">
              {todo}
              <span
                onClick={() => this.deleteTodo(index)}
                key={index} className="badge badge-default badge-circle"
              >
                x
              </span>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state
}),
  mapDispatchToProps = dispatch => ({
    addTodo: todo => {
      dispatch(addTodoActionCreator(todo))
    },
    deleteTodo: index => {
      dispatch(deleteTodoActionCreator(index))
    }
  });
export default connect(mapStateToProps, mapDispatchToProps)(App)

