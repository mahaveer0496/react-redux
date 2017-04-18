import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>TodoApp</p>
      </div>
    )
  }
}




// const Container = connect(mapStateToProps, mapDispatchToProps)(App);
render(<App /> , document.getElementById('root'))
