import React, { Component } from 'react';
// import Single_Recipe from './singleRecipe'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

export default class Recipe extends Component {
   constructor(props) {
      super(props)
   }
   render() {
      let { index, deleteRecipe, showEditorFunc, ingredients, title } = this.props
      return (
         <div className="recipe col-12 col-sm-6 col-md-4 col-lg-4">
            <table className="table table-hover">
               <thead className="thead-inverse">
                  <tr>
                     <th className="text-center">
                        {title}
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {ingredients.map((ingredient, ind) =>
                     <tr key={ind}>
                        <td className="text-center">
                           {ingredient}
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>

            <div className="button-container">
               <button
                  onClick={() => showEditorFunc(index)}
                  className="btn btn-sm btn-primary">Edit
               </button>
               <button
                  onClick={() => deleteRecipe(index)}
                  className="btn btn-sm btn-danger">Delete
               </button>
            </div>
         </div >
      )
   }
}
