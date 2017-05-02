import React, { Component } from 'react'

export default class Editor extends Component {
   constructor(props) {
      super(props);
   }
   editRecipe = event => {
      event.preventDefault();
      this.props.
         edit({
            title: this.refs.title.value,
            ingredients: this.refs.ingredients.value.split(',')
         })
      this.refs.title.value = '';
      this.refs.ingredients.value = '';
   }
   render() {
      return (
         <form className="form-group" onSubmit={this.editRecipe}>
            <input ref="title" className="form-control" type="text" placeholder="Enter new title" required/>
            <input ref="ingredients" className="form-control" type="text" placeholder="Enter new ingredients separated by ," required/>
            <input className="btn btn-block btn-primary" type="submit" />
         </form>
      )
   }
}
