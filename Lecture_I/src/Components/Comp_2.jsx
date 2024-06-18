import React, { Component } from 'react'

class Comp_2 extends Component {
  render() {
    console.log("render() Called");
    return (
        <>
        <h1 className='text-2xl font-bold m-10'>Hello {this.props.lastName}</h1>
        </>
    )
  }
}

export default Comp_2