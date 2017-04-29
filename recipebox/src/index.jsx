import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header'
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8 offset-2">
            <Header />
          </div>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
