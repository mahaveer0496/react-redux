import React, { Component } from 'react';
import Recipe from './Recipe'

export default class Recipes extends Component {
   constructor(props) {
      super(props)
      this.state = {
         ingredients: [['tomato', 'sauce', 'cury'], ['apple', 'cider', 'vinegar'], ['bread', 'jelly', 'jam']]
      }
   }
   submitHandler = (event) => {
      event.preventDefault();
      let ing = this.refs.recipe.value
      let ingredientsArr = ing.split(',')
      this.setState({
         ingredients: [...this.state.ingredients, ingredientsArr]
      })
      this.refs.recipe.value = ''
   }
   deleteRecipe = (index) => {
      this.setState({
         ingredients: [...this.state.ingredients.slice(0,index), ...this.state.ingredients.slice(index+1)]
      })
   }
   editRecipe = (index) => {
      console.log(`edit called ${index}`);
   }
   render() {
      return (
         <div>
            <form className="form-group" onSubmit={this.submitHandler}>
               <input className="form-control" type="text" ref="recipe" placeholder="Enter the ingredients separated by ," />
            </form>

            <Recipe
               ingredients={this.state.ingredients}
               deleteRecipe={this.deleteRecipe}
               editRecipe={this.editRecipe}
            />
         </div>
      )
   }
} 