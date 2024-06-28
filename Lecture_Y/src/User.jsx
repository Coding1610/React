import React, { Component } from 'react'

export default class User extends Component {

  render() {
    return (
        <>
        <div>
            <h1 className='text-green-700'>{this.props.name}</h1>
        </div>
        </>
    )
  }
}
