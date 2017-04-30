import React, { Component } from 'react';
import Recipe from './Recipe';

export default class Recipes extends Component {
   constructor(props) {
      super(props)
      this.state = {
         ingredients: [['tomato', 'sauce', 'cury'], ['apple', 'cider', 'vinegar'], ['bread', 'jelly', 'jam']],
         showEditor: false
      }
   }
   submitHandler = (event) => {
      event.preventDefault();
      let ing = this.refs.recipe.value
      let ingredientsArr = ing.split(',')
      this.setState({
         ingredients: [...this.state.ingredients, ingredientsArr]
      },()=>{
         console.log(this.state.ingredients);
      })
      this.refs.recipe.value = ''
   }
   deleteRecipe = (index) => {
      this.setState({
         ingredients: [...this.state.ingredients.slice(0, index), ...this.state.ingredients.slice(index + 1)]
      })
   }
   editRecipe = (index) => {
      console.log(`edit called ${index}`);
      this.setState({
         showEditor: true
      })
   }
   render() {
      return (
         <div>
            <form className="form-group" onSubmit={this.submitHandler}>
               <input className="form-control" type="text" ref="recipe" placeholder="Enter the ingredients separated by ," />
            </form>

            <div className="container">
               <div className="row">
                  {this.state.ingredients.map((recipe, index) => (
                     <Recipe
                        key={index}
                        recipe={recipe}
                        index={index}
                        showEditor={this.state.showEditor}
                        deleteRecipe={this.deleteRecipe}
                        editRecipe={this.editRecipe}
                     />
                  ))}
               </div>
            </div>
         </div>
      )
   }
} 