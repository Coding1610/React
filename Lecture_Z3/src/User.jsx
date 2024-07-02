import React, { Component } from 'react'

export default class User extends Component {

    componentWillMount(){
        console.log("User Componeent Will Mount");
    }

  render() {
    return (
        <>
        <h1> User Component </h1>
        </>
    )
  }
}