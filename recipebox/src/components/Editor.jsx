import React, { Component } from 'react'

export default class Editor extends Component {
   constructor(props) {
      super(props);
   }
   editRecipe = (event) => {
      event.preventDefault();
      this.props.hideEditorFunc(this.refs.ingredients.value.split(','))
   }
   render() {
      return (
         <form className="form-group" onSubmit={this.editRecipe}>
            <input className="form-control" type="text" placeholder="enter title" />
            <input ref="ingredients" className="form-control" type="text" placeholder="enter ingredients separated by ," />
            <input className="btn btn-block btn-primary" type="submit" />
         </form>
      )
   }
}


