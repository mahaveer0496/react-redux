import React, { Component } from 'react';
import Recipe from './Recipe';

export default class Recipes extends Component {
   constructor(props) {
      super(props)
   }
   submitHandler = (event) => {
      event.preventDefault();
      this.props.addRecipe({
         title: this.refs.title.value,
         ingredients: this.refs.ingredients.value.split(',')
      })
   }
   deleteRecipe = (index) => {
   }
   editRecipe = (index) => {
   }
   render() {
      return (
         <div>
            <form className="form-group" onSubmit={this.submitHandler}>
               <input className="form-control" type="text" ref="title" placeholder="Enter the title" required />
               <input className="form-control" type="text" ref="ingredients" placeholder="Enter the ingredients separated by ," required />
               <input className="btn btn-primary btn-block" type="submit" value="Add recipe" />
            </form>

            <div className="container">
               <div className="row">
                  {this.props.recipes.map((recipe, index) => {
                     return (
                        <Recipe
                           showEditorFunc={this.props.showEditorFunc}
                           key={index}
                           title={recipe.title}
                           ingredients={recipe.ingredients}
                           index={index}
                           deleteRecipe={this.deleteRecipe}
                        />
                     )
                  })}
               </div>
            </div>
         </div>
      )
   }
} 