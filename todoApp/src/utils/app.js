import React, { Component } from 'react';
import { connect } from 'react-redux';

// store
import {
  addTodoActionCreator, deleteTodoActionCreator,
  markCompletedActionCreator, showCompletedActionCreator, showInProgressActionCreator
} from './reducer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoIsComplpeted: false
    }
  }
  addTodo = event => {
    event.preventDefault();
    this.props.addTodo(this.refs.text.value);
    this.refs.text.value = '';
  }
  deleteTodo = index => {    // console.log(`deleteCalled ${index}`);
    this.props.deleteTodo(index)
  }
  markCompleted = index => {
    this.props.markCompletedTodo(index)
  }
  showCompleted = () => {
    this.props.showCompletedTodo()
  }
  showInProgress = () => {
    this.props.showInProgressTodo()
  }
  render() {
    let { todos } = this.props;
    // console.log(todos);
    return (
      <div className="jumbotron container">
        <form onSubmit={this.addTodo}>
          <input className="form-control" type="text" ref="text" placeholder="add a todo" />
          <input className="btn btn-primary btn-block" type="submit" />
        </form>
        <ul className="list-group">
          {todos.map((todo, index) => {
            console.log(todo)
            return (
              <li
                key={index}
                onClick={() => {
                  this.markCompleted(index);
                  this.setState({
                    todoIsComplpeted: !this.state.todoIsComplpeted
                  })
                  }}
                className={
                  todo.completed?
                    `list-group-item list-group-item-success justify-content-between` :
                    `list-group-item justify-content-between`
                }>
                {todo.todo}
                <span
                  onClick={() => this.deleteTodo(index)}
                  key={index}
                  className="badge badge-default badge-circle">x
                </span>
              </li>
            )
          }
          )}
        </ul>
        <br />
        <button onClick={this.showCompleted} className="btn btn-outline-primary">completed</button>
        <button onClick={this.showInProgress} className="btn btn-outline-primary">In-progress</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state
  }

}
function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => {
      dispatch(addTodoActionCreator(todo))
    },
    deleteTodo: (index) => {
      dispatch(deleteTodoActionCreator(index))
    },
    showCompletedTodo: () => {
      dispatch(showCompletedActionCreator())
    },
    showInProgressTodo: () => {
      dispatch(showInProgressActionCreator())
    },
    markCompletedTodo: (index) => {
      dispatch(markCompletedActionCreator(index))
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App)
export default Container

