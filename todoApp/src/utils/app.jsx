import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions ----
import { addTodoActionCreator, deleteTodoActionCreator, toggleTodoActionCreator } from './actions.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }
  addTodo(event) {
    event.preventDefault();
    this.props.create(this.refs.text.value);
    this.refs.text.value = '';
  }
  deleteTodo(index) {
    console.log(`deleteCalled ${index}`);
    this.props.remove(index);
  }
  toggleTodo(index) {
    console.log(`toggleCalled ${index}`);
    this.props.toggle(index);
  }
  render() {
    let { todos } = this.props;
    return (
      <div className="jumbotron container">
        <form onSubmit={this.addTodo}>
          <input className="form-control" type="text" ref="text" />
          <input className="btn btn-primary btn-block" type="submit" />
        </form>
        <div className="list-group">
          {todos.map((todo, index) =>
            <div className="list-container list-group-item" key={index}>
              <input
                type="checkbox"
                onClick={() => this.toggleTodo(index)} defaultChecked={todo.completed}
                className="checkbox" />
              <div
                className={todo.completed ? 'strike list' : 'list'}>
                {todo.todo}
              </div>
              <div
                onClick={() => this.deleteTodo(index)}
                key={index}
                className="cross">x
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
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
    }
  });
export default connect(mapStateToProps, mapDispatchToProps)(App)

