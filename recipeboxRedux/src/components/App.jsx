import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

//components
import Header from './Header';
import Recipes from './Recipes';
import Editor from './Editor';

//actions
import { createRecipeActionCreator, removeRecipeActionCreator } from './../actions/actions'

class App extends Component {
   constructor(props) {
      super(props);

   }
   showEditorFunc = (index) => {

   }
   hideEditorFunc = (obj) => {

   }
   render() {
      let { recipes, create, remove } = this.props
      return (
         <div className="main container">
            <div className="row align-items-center">
               <div className="col-10 offset-1">
                  <Header />
                  <Recipes
                     recipes={recipes}
                     create={create}
                     remove={remove}
                  />
               </div>
            </div>
         </div>
      )
   }
}

function mapStateToProps(state) {
   return {
      recipes: state
   }
}
function mapDispatchToProps(dispatch) {
   return {
      create: ({ title, ingredients }) => {
         dispatch(createRecipeActionCreator({ title, ingredients }))
      },
      remove: (index) => {
         dispatch(removeRecipeActionCreator(index))
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
