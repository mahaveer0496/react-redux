import React, { Component } from 'react';

export default class Recipe extends Component {
  constructor(props) {
     super(props);
   }
  render() {
     return (
        <div className="recipe col-12 col-sm-6 col-md-4 col-lg-4">
           <table className="table table-hover">
              <thead className="thead-inverse">
                 <tr>
                    <th className="text-center">
                       {this.props.title}
                     </th>
                  </tr>
               </thead>
              <tbody>
                 {this.props.ingredients.map((ingredient, ind) =>
                    <tr key={ind}>
                       <td className="text-center">
                          {ingredient}
                        </td>
                     </tr>,
                  )}
               </tbody>
            </table>

           <div className="button-container">
              <button
                 className="btn btn-sm btn-primary"
               >Edit
               </button>
              <button
                 className="btn btn-sm btn-danger"
               >Delete
               </button>
            </div>
         </div >
      );
   }
}
