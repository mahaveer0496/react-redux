import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Editor from './components/Editor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecipes: true,
      showEditor: false,
      index: null,
      newIngredients: []
    }
  }
  showEditorFunc = (index) => {
    this.setState({
      showRecipes: false,
      showEditor: true,
      index
    })
  }
  hideEditorFunc = (obj) => {
    this.setState({
      showRecipes: true,
      showEditor: false,
      newIngredients: obj
    })
  }
  render() {
    return (
      <div className="main container">
        <div className="row align-items-center">
          <div className="col-10 offset-1">
            <Header />
            <div className={this.state.showRecipes ? "showRecipes" : "hideRecipes"}>
              <Recipes
                index={this.state.index}
                newIngredients={this.state.newIngredients}
                showEditorFunc={this.showEditorFunc} />
            </div>
            {this.state.showEditor &&
              <Editor hideEditorFunc={this.hideEditorFunc} />}
          </div>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
