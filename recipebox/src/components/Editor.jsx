import React, { Component } from 'react'

export default class Editor extends Component {
   constructor(props) {
      super(props);
   }
   editRecipe = (event) => {
      event.preventDefault();
      let title = this.refs.title.value
      let ingredients = this.refs.ingredients.value.split(',');      
      this.props.hideEditorFunc({
         title,
         ingredients
      })
   }
   render() {
      return (
         <form className="form-group" onSubmit={this.editRecipe}>
            <input ref="title" className="form-control" type="text" placeholder="Enter new title" />
            <input ref="ingredients" className="form-control" type="text" placeholder="enter new ingredients separated by ," />
            <input className="btn btn-block btn-primary" type="submit" />
         </form>
      )
   }
}


