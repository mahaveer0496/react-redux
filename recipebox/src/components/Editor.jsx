import React, { Component } from 'react'

export default class Editor extends Component {
   render() {
      return (
         <form onSubmit={(event) => {
            event.preventDefault();
            global.GLOBAL_INDEX = null;
         }}>
            <input className="list-group-item" type="text" />
            <textarea className="list-group-item" name="" cols="5" rows="10"></textarea>
            <input type="submit" />
         </form>
      )
   }
} 
