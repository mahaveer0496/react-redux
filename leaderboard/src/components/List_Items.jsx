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
            })
         })
      })
   }
   sortByRecent = () => {
      fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(response => {
         response.json().then(users => {
            this.setState({
               users
            })
         })
      })
   }
   sortByAllTime = () => {
      fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(response => {
         response.json().then(users => {
            this.setState({
               users
            })
         })
      })
   }
   render() {
      return (
         <div className="data-container">
            <List_Item 
            users={this.state.users} 
            sortByAllTime={this.sortByAllTime}
            sortByRecent={this.sortByRecent}
            />
         </div>
      )
   }
}
