import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions ----
import { addTodoActionCreator, deleteTodoActionCreator, toggleTodoActionCreator, setVisibilityFilterActionCreator } from './../actions/actions.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.state = {
      todos: this.props.todos
    }
  }
  addTodo(event) {
    event.preventDefault();
    this.props.create(this.refs.text.value);
    this.refs.text.value = '';
  }
  deleteTodo(index) {
    this.props.remove(index);
  }
  toggleTodo(index) {
    this.props.toggle(index);
  }
  changeFilter(filter) {
    switch (filter) {
      case 'SHOW_ALL':
        this.setState({
          todos: this.state.todos
        })
        break;
      case 'SHOW_COMPLETED':
        this.setState({
          todos: this.state.todos.filter(todo => todo.completed === true)
        })
        break;
      case 'SHOW_IN_PROGRESS':
        this.setState({
          todos: this.state.todos.filter(todo => todo.completed === false)
        })
        break;
      default:
        break;
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      todos: nextProps.todos
    }, () => {
      this.changeFilter(nextProps.visibilityFilter)
    })
  }

  render() {
    let { setFilter } = this.props;
    return (
      <div className="container">


        <form onSubmit={this.addTodo}>
          <div className="input-field form-container">
            <input id="add-todo" type="text" ref="text" placeholder="Add Todo" required />

            <input className="btn waves-effect waves-light" type="submit" />

          </div>
        </form>


        <div className="collection">
          {this.state.todos.map((todo, index) =>
            <div className="collection-item" key={index}>
              <p className="list">
                <input
                  id={todo.todo}
                  type="checkbox"
                  onClick={() => this.toggleTodo(index)}
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
              <input
                type="checkbox"
                onClick={() => this.toggleTodo(index)}
                onChange={() => {
                  if ('lol' > 0) { }
                }}
                checked={todo.completed}
              />
              <div
                onClick={() => this.deleteTodo(index)}
                className="delete secondary-content"
                key={index}>
                <i className="material-icons">delete</i>
              </div>

            </div>
          )}
        </div>

        <div className="button-container">
          <div className="buttons">
            <button onClick={() => setFilter('SHOW_ALL')} className="btn btn-primary">Show All</button>
          </div>
          <div className="buttons">
            <button onClick={() => setFilter('SHOW_COMPLETED')} className="btn btn-primary">Completed</button>
          </div>
          <div className="buttons">
            <button onClick={() => setFilter('SHOW_IN_PROGRESS')} className="btn btn-primary">In Progress</button>
          </div>
          
        </div>

        <div className="space"></div>
      </div>
    )
  }
}

const
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

