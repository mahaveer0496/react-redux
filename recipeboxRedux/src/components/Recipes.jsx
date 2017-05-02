import React, { Component } from 'react';
import Recipe from './Recipe';

export default class Recipes extends Component {
   constructor(props) {
      super(props)
   }
   submitHandler = (event) => {
      event.preventDefault();
      this.props.
         create({
            title: this.refs.title.value,
            ingredients: this.refs.ingredients.value.split(',')
         })
      this.refs.title.value = '';
      this.refs.ingredients.value = '';
   }
   deleteRecipe = (index) => {
      this.props.
         remove(index);
   }
   // editRecipe = (index, object) => {
   //    this.props.
   //       edit(index, object)
   // }
   getIndexOfRecipe = index => {
      this.props.
         getIndex(index)
   }
   render() {
      return (
         <div>
            <form className="form-group" onSubmit={this.submitHandler}>
               <input className="form-control" type="text" ref="title" placeholder="Enter the title" />
               <input className="form-control" type="text" ref="ingredients" placeholder="Enter the ingredients separated by ," />
               <input className="btn btn-primary btn-block" type="submit" value="Add recipe" />
            </form>

            <div className="container">
               <div className="row">
                  {this.props.recipes.map((recipe, index) => {
                     return (
                        <Recipe
                           key={index}
                           title={recipe.title}
                           ingredients={recipe.ingredients}
                           index={index}
                           deleteRecipe={this.deleteRecipe}
                           getIndexOfRecipe={this.getIndexOfRecipe}
                        />
                     )
                  })}
               </div>
            </div>
         </div>
      )
   }
} 