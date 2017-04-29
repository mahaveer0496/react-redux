import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

export default class Recipes extends Component {
   constructor(props) {
      super(props)
   }
   render() {
      let { deleteRecipe, editRecipe } = this.props
      return (
         < div className="box-container" >
            <div className="container">
               <div className="row">
                  {this.props.ingredients.map((recipe, index) =>
                     <div className="col-4" key={index}>
                        <ul className="list-group boxes" >
                           {recipe.map((dish, jindex) =>
                              <li className="list-group-item" key={jindex}>{dish}</li>
                           )
                           }
                        </ul>
                        <Button onClick={() => {
                           editRecipe(index)
                        }} bsSize="small" bsStyle="primary">Edit</Button>
                        <Button onClick={() => {
                           deleteRecipe(index)
                        }} bsSize="small" bsStyle="danger">Delete</Button>
                     </div>
                  )}
               </div>
            </div>
         </div >
      )
   }
}



