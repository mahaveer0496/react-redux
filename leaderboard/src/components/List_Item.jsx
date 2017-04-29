import React from 'react';

let List_Items = props =>
   <table className="table table-striped table-hover">
      <thead className="thead-inverse">
         <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th className="text-center sort" onClick={props.sortByRecent}>Points In Last 30 Days</th>
            <th className="text-center sort" onClick={props.sortByAllTime}>All time Points</th>
         </tr>
      </thead>
      <tbody>
         {props.users.map((user, index) =>
            <tr key={index}>
               <td className="align-middle">{index + 1}.</td>
               <td className="align-middle text-left"><img src={user.img} alt={user.username} className="img-thumbnail" width="40px" height="40px" />
                  <a href={`https://www.freecodecamp.com/${user.username}`} target="_blank">     {user.username}</a>
               </td>
               <td className="align-middle text-center">{user.recent}</td>
               <td className="align-middle text-center">{user.alltime}</td>
            </tr>
         )}
      </tbody>
   </table>
export default List_Items
