import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const incrementAction = () => {
  return {
    type: INCREMENT
  }
}
const decrementAction = () => {
  return {
    type: DECREMENT
  }
}
const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}
let store = createStore(reducer);

const mapStateToProps = (state) => {
  return { num: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(incrementAction())
    },
    decrement: () => {
      dispatch(decrementAction())
    }
  }
};
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  increment = () => {
    console.log('inc was called')
    this.props.increment()
  }
  decrement = () => {
    console.log('dec was called')
    this.props.decrement()
  }
  render() {
    return (
      <div>
        <p>{this.props.num}</p>
        <button type="button" onClick={this.increment}>Increment</button>
        <button type="button" onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}


const Container = connect(mapStateToProps, mapDispatchToProps)(App);

render(
  <Provider store={store}>
    <Container />
  </Provider>
  , document.getElementById('root'))
