import React, { Component } from 'react';
import List_Item from './List_Item'


export default class List_Items extends Component {
   constructor(props) {
      super(props);
      this.state = {
         users: []
      }
   }
   componentDidMount() {
      fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(response => {
         response.json().then(users => {
            this.setState({
               users
            }, ()=>{
               console.log(this.state.users[0]);
            })
         })
      })
   }
   render() {
      return (
         <div>
            <h1>welcome to List_Items</h1>
            <List_Item users={this.state.users}/>
         </div>
      )
   }
}
