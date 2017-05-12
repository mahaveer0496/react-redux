import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions ----
import { addTodoActionCreator, deleteTodoActionCreator, toggleTodoActionCreator, setVisibilityFilterActionCreator } from './actions.js'


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
      <div className="jumbotron container">


        <form onSubmit={this.addTodo}>
          <input className="form-control" type="text" ref="text" required />
          <input className="btn btn-primary btn-block" type="submit" />
        </form>


        <div className="list-group">
          {this.state.todos.map((todo, index) =>
            <div className="list-container list-group-item" key={index}>

              <label className="label--checkbox">
                <input
                  type="checkbox"
                  onClick={() => this.toggleTodo(index)}
                  onChange={() => { if ('lol' > 0); }}
                  checked={todo.completed}
                  className="checkbox" />
              </label>

              <div
                className={todo.completed ? 'strike list' : 'list'}>
                {todo.todo}
              </div>

              <div
                onClick={() => this.deleteTodo(index)}
                className="cross"
                key={index}>
              </div>

            </div>
          )}
        </div>


        <button onClick={() => setFilter('SHOW_ALL')} className="btn btn-primary">Show All</button>
        <button onClick={() => setFilter('SHOW_COMPLETED')} className="btn btn-primary">Completed</button>
        <button onClick={() => setFilter('SHOW_IN_PROGRESS')} className="btn btn-primary">In Progress</button>


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

