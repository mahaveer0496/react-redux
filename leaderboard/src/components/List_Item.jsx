import React, { Component } from 'react';

export default class List_Items extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <table>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Camper Name</th>
                  <th>Points In Last 30 Days</th>
                  <th>All time Points</th>
               </tr>
            </thead>
            <tbody>
               {this.props.users.map((user, index) =>
                  <tr key={index}>
                     <td>{index + 1}</td>
                     <td>{user.username}</td>
                     <td>{user.recent}</td>
                     <td>{user.alltime}</td>
                  </tr>
               )}
            </tbody>
         </table>
      )
   }
}