import React, { Component } from 'react'

export default class Guest extends Component {
  render() {
    return (
      <div>
        <h1 className='text-blue-700'>{this.props.name}</h1>
      </div>
    )
  }
}