import React, { Component } from 'react'
import User from './User'
import Guest from './Guest'

export default class App extends Component {

  state={
    name:"Yashu"
  }

  render() {
    return (
      <>
      <div className='m-10 text-2xl font-bold'>
        <h1 className='text-orange-600'>{this.state.name}</h1>
        <Guest name={this.state.name}/>
        <User name={this.state.name}/>
      </div>
      </>
    )
  }
}