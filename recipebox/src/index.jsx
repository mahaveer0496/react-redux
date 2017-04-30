import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header'
import Recipes from './components/Recipes'

global.GLOBAL_INDEX = null
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-10 offset-1">
            <Header />
            <Recipes />
          </div>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
