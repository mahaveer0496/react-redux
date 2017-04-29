import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header'
import List_Items from './components/List_Items'
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8 offset-2">
            <Header />
            <List_Items />
          </div>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
