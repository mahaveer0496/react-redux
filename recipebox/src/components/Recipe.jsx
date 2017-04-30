import React, { Component } from 'react';
// import Single_Recipe from './singleRecipe'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

export default class Recipe extends Component {
   constructor(props) {
      super(props)
   }
   render() {
      let { recipe, index, deleteRecipe, editRecipe, showEditor } = this.props
      return (
         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ul className=" list-group">
               {recipe.map((ingredients, ind) =>
                  <li className="list-group-item" key={ind}>{ingredients}</li>
               )}
            </ul>
            <button onClick={()=> editRecipe(index)}className="btn btn-sm btn-primary">Edit</button>
            <button onClick={()=> deleteRecipe(index)}className="btn btn-sm btn-danger">Delete</button>
         </div >
      )
   }
}
