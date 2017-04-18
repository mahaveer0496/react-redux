import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// store
import store, { addTodoActionCreator } from './reducer'


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  addTodo = (event) => {
    event.preventDefault();
    this.props.addTodo(this.refs.text.value);
    this.refs.text.value = '';
  }
  render() {
    let { todos } = this.props;
    console.log(todos);
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input type="text" ref="text" />
          <input type="submit" />
        </form>
        <ul>
          {todos.map(todo => {
            <li>{todo}</li>
          })}
        </ul>
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
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App)
export default Container

