import React, { Component } from 'react';
import Recipe from './Recipe';

export default class Recipes extends Component {
   constructor(props) {
      super(props)
      this.state = {
         recipes: [{
            title: 'Tomato curry',
            ingredients: ['tomato', 'sauce', 'cury']
         },
         {
            title: 'Apple wine',
            ingredients: ['apple', 'cider', 'vinegar']
         },
         {
            title: 'Bread',
            ingredients: ['bread', 'jelly', 'jam']
         }
         ]
      }
   }
   submitHandler = (event) => {
      event.preventDefault();
      let recipeTitle = this.refs.title.value;
      let ing = this.refs.recipe.value;
      let ingredientsArr = ing.split(',')
      let obj = {
         title: recipeTitle,
         ingredients: ingredientsArr
      }
      this.setState({
         recipes: [...this.state.recipes, obj]
      }, () => {
         console.log(this.state.recipes);
      })
      this.refs.recipe.value = ''
   }
   deleteRecipe = (index) => {
      this.setState({
         recipes: [...this.state.recipes.slice(0, index), ...this.state.recipes.slice(index + 1)]
      })
   }
   editRecipe = (index) => {
   }
   componentWillReceiveProps = (nextProps) => {
      if (nextProps.newIngredients.length !== 0 && nextProps.newIngredients !== this.props.newIngredients) {
         let newIndex = nextProps.index;
         let newIngredient = nextProps.newIngredients
         let newArr = this.state.recipes.map((val, i) =>
            val = i === newIndex ? newIngredient : val
         )
         this.setState({
            recipes: newArr
         })

      }
   }
   render() {
      return (
         <div>
            <form className="form-group" onSubmit={this.submitHandler}>
               <input className="form-control" type="text" ref="title" placeholder="Enter the title" />
               <input className="form-control" type="text" ref="recipe" placeholder="Enter the ingredients separated by ," />
               <input className="btn btn-primary btn-block" type="submit" value="Add recipe"/>
            </form>

            <div className="container">
               <div className="row">
                  {this.state.recipes.map((recipe, index) => {
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