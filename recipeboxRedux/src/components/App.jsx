import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

//components
import Header from './Header';
import Recipes from './Recipes';
import Editor from './Editor';

//actions
import {addRecipeActionCreator} from './../actions/actions'

 class App extends Component {
   constructor(props) {
      super(props);

   }
   showEditorFunc = (index) => {

   }
   hideEditorFunc = (obj) => {

   }
   render() {
      return (
         <div className="main container">
            <div className="row align-items-center">
               <div className="col-10 offset-1">
                  <Header />
                  <Recipes 
                  recipes={this.props.recipes}
                  addRecipe={this.props.addRecipe}
                  />
               </div>
            </div>
         </div>
      )
   }
}

function mapStateToProps(state){
   return {
      recipes: state
   }
}
function mapDispatchToProps(dispatch){
   return {
      addRecipe: ({title, ingredients}) => {
         dispatch(addRecipeActionCreator({title, ingredients}))
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
