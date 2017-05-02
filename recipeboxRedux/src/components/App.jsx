import React from 'react';
import { connect } from 'react-redux';

//components
import Header from './Header';
import Recipes from './Recipes';
import Editor from './Editor';

//actions
import { createRecipeActionCreator, removeRecipeActionCreator, editRecipeActionCreator, getIndexOfRecipeToEditActionCreator } from './../actions/actions'

const App = ({ recipes, showEditor, create, remove, edit, getIndex }) =>
   <div className="main container">
      <div className="row align-items-center">
         <div className="col-10 offset-1">
            <Header />
            <div
               className={!showEditor
                  ? 'showRecipes'
                  : 'hideRecipes'}>
               <Recipes
                  recipes={recipes}
                  create={create}
                  remove={remove}
                  getIndex={getIndex}
               />
            </div>
            {showEditor &&
               <Editor
                  edit={edit}
               />}
         </div>
      </div>
   </div>,
   mapDispatchToProps = dispatch => ({
      create: ({ title, ingredients }) => {
         dispatch(createRecipeActionCreator({ title, ingredients }))
      },
      remove: index => {
         dispatch(removeRecipeActionCreator(index))
      },
      edit: object => {
         dispatch(editRecipeActionCreator(object))
      },
      getIndex: index => {
         dispatch(getIndexOfRecipeToEditActionCreator(index))
      }
   }),
   mapStateToProps = state => ({
      recipes: state.recipes,
      showEditor: state.showEditor
   });
export default connect(mapStateToProps, mapDispatchToProps)(App);
